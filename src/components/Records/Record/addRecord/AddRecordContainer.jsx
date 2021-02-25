import {addRecordThunk} from "../../../../redux/reducer_recordings";
import AddRecord from './AddRecord';
import {connect} from 'react-redux';
import React from 'react';

class AddRecordContainer extends React.Component {

    componentDidMount() {
        // this.props.addRecordThunk();
    }

    render(){
            return (
                <>
                    <AddRecord addRecordThunk={this.props.addRecordThunk} idDay={this.props.idDay}/>
                </>
            )
        }
}

let mapStateToProps = (state) => 
{
    return {
        newRecordtext: state.WeekRecordings.newRecordtext
    }
}

const AddRecordContainer2 = connect(mapStateToProps, {addRecordThunk})(AddRecordContainer); 

export default AddRecordContainer2;








