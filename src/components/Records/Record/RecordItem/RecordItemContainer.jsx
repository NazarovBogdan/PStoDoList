import React from 'react';
import Record from './Record';
import s from '../Record.module.css';
import {connect} from 'react-redux';
import {onChangeRecordFlagAC, changeRecordThunk, deleteRecordThunk, setRecordThunk} from "../../../../redux/reducer_recordings";

class RecordItemContainer extends React.Component {

    componentDidMount() {
        const idDay = this.props.idDay;
        this.props.setRecordThunk(idDay)
    }
   
    render() {
        return (
            <div className={s.recordings}> 
                {
                    this.props.WeekRecordings
                        .map(d => <Record record={d.recording} 
                                id={d.id} 
                                key={d.id} 
                                parent={d.parentId} 
                                isChange={d.isChange}
                                onChangeRecordFlagAC={this.props.onChangeRecordFlagAC}
                                deleteRecordThunk={this.props.deleteRecordThunk}
                                changeRecordThunk={this.props.changeRecordThunk}
                                idDay = {this.props.idDay}/>)
                }
            
            </div>
    
        );
    }
}



const mapStateToProps = (state) => 
{   
    return {
        WeekRecordings: state.WeekRecordings.recordings,
    }
}
  
const  RecordContainer = connect(
    mapStateToProps, {deleteRecordThunk, 
    changeRecordThunk, setRecordThunk, onChangeRecordFlagAC})
    (RecordItemContainer) 

export default RecordContainer;