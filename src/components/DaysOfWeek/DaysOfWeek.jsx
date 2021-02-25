import React from 'react';
import s from './DaysOfWeek.module.css';
import {Route} from 'react-router-dom';
import Records from '../Records/Records';


function DaysOfWeek() {
    return (
        <div className={s.days_items}>
            <Route path="/monday" render={ () => <Records idDay = {1}/> }/>
            <Route path="/tuesday" render={ () => <Records idDay={2}/> }/> 
            <Route path="/wednesday" render={ () => <Records idDay={3}/> }/> 
            <Route path="/thursday" render={ () => <Records idDay={4}/> }/>  
            <Route path="/friday" render={ () => <Records idDay={5}/> }/> 
            <Route path="/saturday" render={ () => <Records idDay={6}/> }/> 
            <Route path="/sunday" render={ () => <Records idDay={7}/> }/> 
        </div>
    );
  }
  
  export default DaysOfWeek;
  