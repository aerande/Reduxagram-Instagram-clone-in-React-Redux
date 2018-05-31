/**
 * Created by ShriRam on 2/17/2017.
 */
//inc

export function increment (index) {
    //noinspection JSAnnotator,JSAnnotator
    return  {
        type: "INCREMENT_LIKES",
        index
    }
}
export function addComment(postId,author,comment){
    return{
        type:"ADD_COMMENT",
        postId,
        author,
        comment
    }
}

//remove comm

export function removeComment(postId,i) {
    return {
        postId,
        i
    }

}