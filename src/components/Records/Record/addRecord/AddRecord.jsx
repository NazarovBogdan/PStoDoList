import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from '../Record.module.css'


function AddRecord(props) {

    const onSubmit = (formData) => {
        const idDay = props.idDay
        const params = {recording: formData.newRecord, parentId: idDay, isChange: 1, userId: 1}
        const DATA = new FormData;
        DATA.append("recording", params.recording);
        DATA.append("parentId", params.parentId);
        DATA.append("isChange", params.userId);
        DATA.append("userId", params.userId);
        props.addRecordThunk(DATA, idDay)
    }

    return (
        <div>
           <AddReduxFormRecord onSubmit={onSubmit}/>
        </div>
        
    );
}

const AddRecordForm = (props) => {
    return (
        <form className={s.add_record} onSubmit={props.handleSubmit}>
            <Field
                name={"newRecord"}
                component={"input"}
                placeholder="Введите запись"
                className={s.input_record}
            />
            <button className={s.button_record}>Добавить запись</button>
        </form>
    )
}

const AddReduxFormRecord = reduxForm({form: "addRecord"})(AddRecordForm);
  
export default AddRecord;


