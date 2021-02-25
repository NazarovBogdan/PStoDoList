import { apiDay } from "../api/api";

const SET_DAYS = "SET_DAYS";

let initialState = {
    Days: [
        // {id:1, day: "/monday", title: "Понедельник"},
        // {id:2, day: "/tuesday" , title: "Вторник"},
        // {id:3, day: "/wednesday" , title: "Среда"},
        // {id:4, day: "/thursday" , title: "Четверг"},
        // {id:5, day: "/friday" , title: "Пятница"},
        // {id:6, day: "/saturday" , title: "Суббота"},
        // {id:7, day: "/sunday" , title: "Воскресенье"}
    ]
}

function reducer_tittleWeek(state = initialState, action) {

    switch(action.type){  
        case SET_DAYS: {
            return { ...state, Days: action.setDays}
        }  
        default:  
            return state;      
    }
}

export const set_days = (setDays) => {
    return {
        type: SET_DAYS, setDays
    }
}

export const getDaysThunk = () =>{
    return (dispach) => {
        apiDay()
                .then(data => {
                    dispach(set_days(data));
                })
    }
}

export default reducer_tittleWeek;