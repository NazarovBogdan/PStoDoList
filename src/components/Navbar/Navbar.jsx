import React from 'react';
import DayContainer from './WeekDays/DayContainer';
import s from './Navabar.module.css';

function Navbar() {
    return (
        <nav className={s.navbar_nav}>
            <DayContainer />
        </nav>
    );
}

export default Navbar;