import {applyMiddleware, combineReducers, createStore} from 'redux';
import reducer_titleWeek from './reducer_titleWeek';
import reducerRecordings from './reducer_recordings';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    DayOfWeeks: reducer_titleWeek,
    WeekRecordings: reducerRecordings,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
