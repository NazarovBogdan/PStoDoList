import { apiAddRecord, apiDeleteRecord, apiRecord, apiChangeRecord} from "../api/api";

const ADD_RECORDING = "ADD-RECORDING";
const ON_CHANGE_RECORD_FLAG = "ON_CHANGE_RECORD_FLAG";
const CHANGE_DELETE_RECORD = "CHANGE_DELETE_RECORD";
const SET_RECORDINGS = "SET_RECORDINGS";


let initialState = {

    recordings: [
        // {id:1, recording: "купи крээм в понедельник ска", parentId:1, change: true},
        // {id:2, recording: "помазать крээм в понедельник ска", parentId:1, change: true },
        // {id:3, recording: "купи крээм во вторник", parentId:2, change: true},
        // {id:4, recording: "помазать крээм в вторник", parentId:2, change: true },
        // {id:5, recording: "купи крээм в среду", parentId:3, change: true},
        // {id:6, recording: "помазать крээм в среду", parentId:3, change: true },
        // {id:7, recording: "купи крээм в четверг", parentId:4, change: true},
        // {id:8, recording: "помазать крээм в четверг", parentId:4, change: true },
        // {id:9, recording: "купи крээм в пятницу", parentId:5, change: true},
        // {id:10, recording: "помазать крээм в пятницу", parentId:5, change: true },
        // {id:11, recording: "купи крээм в субботу", parentId:6, change: true},
        // {id:12, recording: "помазать крээм в субботу", parentId:6, change: true },
        // {id:13, recording: "купи крээм в воскресенье", parentId:7, change: true},
        // {id:14, recording: "помазать крээм в воскресенье", parentId:7, change: true}
    ],

    newRecordtext: ""
}

let reducerRecordings = (state = initialState, action) => {
    switch(action.type){
        case ADD_RECORDING: {
            let newRecording = {
                recording: action.text,
                parentId: action.parentId
            };
            return {
                ...state,
                recordings: [...state.recordings, newRecording],
                newRecordtext: ""
            }   
        } 
        case ON_CHANGE_RECORD_FLAG: {
            return{
                ...state,
                recordings: state.recordings.map(r => {
                    if(r.id === action.ChangeRecordId){
                        return {...r, isChange: 0 }
                    }
                    return r;
                })
            }
        }
        case CHANGE_DELETE_RECORD: {
            return{
                ...state,
                recordings: state.recordings.map(r => {
                    if(r.id === action.ChangeRecordId){
                        return {...r, recording: "", id: "", parentId: "", change: "", userId: "" }
                    }

                    return r;
                })
            }
        }  
        case SET_RECORDINGS: {
            return { ... state, recordings: action.setRecording}
        }  
        default:  
            return state;      
    }
    
}

export const addRecordAC = (text, parentId) => {
    return {
        type: ADD_RECORDING, text, parentId
    }
}

export const onChangeRecordFlagAC = (ChangeRecordId) => {
    return {
        type: ON_CHANGE_RECORD_FLAG,  ChangeRecordId
    }
}

export const changeDeleteRecord = (ChangeRecordId) => {
    return {
        type: CHANGE_DELETE_RECORD, ChangeRecordId
    }
}

export const set_recordings = (setRecording) => {
    return {
        type: SET_RECORDINGS, setRecording
    }
}

export const setRecordThunk = (idDay) =>{
    return (dispatch) => {
        apiRecord(idDay)
            .then(data => {
                dispatch(set_recordings(data))
            })
        
    }
}

export const addRecordThunk = (params, idDay) =>{
    return (dispatch) => {
        apiAddRecord(params);
        apiRecord(idDay)
            .then(data => {
                dispatch(set_recordings(data))
            })
        
    }
}

export const deleteRecordThunk = (id, idDay) =>{
    return (dispatch) => {
        apiDeleteRecord(id)
        apiRecord(idDay)
            .then(data => {
                dispatch(set_recordings(data))
            })
    }
}

export const changeRecordThunk = (params, idDay) =>{
    return (dispatch) => {
        apiChangeRecord(params)
        apiRecord(idDay)
            .then(data => {
                dispatch(set_recordings(data))
                console.log("vsd");
            })
    }
}

export default reducerRecordings;