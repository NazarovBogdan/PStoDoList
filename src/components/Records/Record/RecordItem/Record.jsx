import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from '../Record.module.css';


function Record(props) {

    const ChangeRecordForm = (props) => {
        return (
            <form className={s.record_container} onSubmit={props.handleSubmit}> 
                <Field 
                    component={"input"}
                    name={"recordText"}
                    placeholder={props.props.record}
                    value= {props.props.record}
                    className={s.input_change}/> 
                <button  className={s.button_change}>Изменить</button> 
            </form>
        )
    }

    const ChangeReduxFormRecord = reduxForm({form: "changeRecord" + props.id})(ChangeRecordForm);

    let changeRecordFlag = () => {
        let ChangeRecordId = props.id
        props.onChangeRecordFlagAC(ChangeRecordId) // изменеие флага

    }

    let changeDeleteRecord = () => {
        let idDay = props.idDay
        const DATA = new FormData;
        DATA.append("id", props.id);
        props.deleteRecordThunk(DATA , idDay)
    }

    const onSubmit = (formData) => {
        let idDay = props.idDay
        const DATA = new FormData;
        DATA.append("recording", formData.recordText);
        DATA.append("id", props.id);
        props.changeRecordThunk(DATA, idDay)
    }


    return (
        <>
            {(props.isChange === 0)
            ?   <ChangeReduxFormRecord props={props} onSubmit={onSubmit}/>
             :  <div className={s.record_container}>
                    <p className={s.record}>{props.record}</p>
                    <div className={s.buttons_change}>
                        <button onClick={ changeRecordFlag } className={s.button_change}>Изменить запись</button>
                        <button onClick={ changeDeleteRecord } className={s.button_change}>Удалить запись</button>
                    </div>
                </div> }
            
        </>
    );
}


export default Record;