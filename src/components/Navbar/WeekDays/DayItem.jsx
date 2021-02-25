import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './CSS/DayItem.module.css';



function DayItem(props) {
    return ( 
        <div>
            <NavLink to = {props.day} className={s.link} activeClassName={s.activeLink}>
                <p className={s.link_item}>{props.title}</p>
            </NavLink>
        </div>  
    
    );
    
}
  
export default DayItem;