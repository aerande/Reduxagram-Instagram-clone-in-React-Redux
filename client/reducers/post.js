/**
 * Created by ShriRam on 2/17/2017.
 */
// action and copy of current state
function posts( state=[], action) {

     switch (action.type){

         case 'INCREMENT_LIKES':
            console.log("INCREMENT_LIKES!");
            const i = action.index;
            return[
                ...state.slice(0,i), // before the one to update
                {...state[i],likes:state[i].likes+1},
                    ...state.slice(i+1),
            ]

         default:
             return state;
     }

}

export default posts;