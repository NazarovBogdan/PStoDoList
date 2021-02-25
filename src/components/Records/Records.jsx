import React from 'react';
import s from './Records.module.css'
import RecordItemContainer from './Record/RecordItem/RecordItemContainer';
import AddRecordContainer from './Record/addRecord/AddRecordContainer';

function Records(props) {

    return (
        <div className={s.days_item}>
            <AddRecordContainer idDay={props.idDay}/>
            <RecordItemContainer idDay={props.idDay} />
        </div>    
    );
}

export default Records;