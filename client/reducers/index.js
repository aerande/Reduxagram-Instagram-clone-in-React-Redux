/**
 * Created by ShriRam on 2/17/2017.
 */
import {combineReducers} from 'redux';
import {routerReducer} from  'react-router-redux';

import posts from './post';
import comments from './comments';

const rootReducer = combineReducers({posts,comments,routing:routerReducer});


export default rootReducer;