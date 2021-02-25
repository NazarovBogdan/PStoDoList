import DayItem from './DayItem';
import React from 'react';
import {connect} from 'react-redux';
import {getDaysThunk} from '../../../redux/reducer_titleWeek'

class DaysMap extends React.Component {

    componentDidMount() {
        this.props.getDaysThunk();
    }

    render(){
            return (
                <>
                    {this.props.Days.map(d => <DayItem day={d.day} title={d.title} id={d.id} key={d.id}/>)}
                </>
            )
        }
}

let mapStateToProps = (state) => 
{
    return {
        Days: state.DayOfWeeks.Days
    }
}

// const mapStateToProps = ({ DayOfWeeks: { Days } }) => ({ Days })

const DayContainer = connect(mapStateToProps, {getDaysThunk})(DaysMap);

export default DayContainer;