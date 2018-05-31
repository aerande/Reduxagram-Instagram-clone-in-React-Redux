/**
 * Created by ShriRam on 2/17/2017.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actioncreator';

import Main from './Main';

function mapStateToProps(state) {
    return {

        posts:state.posts,
        comments:state.comments

    }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators(actionCreators,dispatch);
}
const App = connect(mapStateToProps,mapDispatchToProps)(Main);

export default App;