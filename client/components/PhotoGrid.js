
/**
 * Created by ShriRam on 2/17/2017.
 */

import React from 'react';
import {Link} from 'react-router';
import Photo from './Photo'

const PhotoGrid = React.createClass ({
    render(){

        return(
            <div className="photo-grid">
                {this.props.posts.map((post,i)=><Photo {...this.props} key={i} i ={i} post = {post}/>)}
            </div>
        )
    }



});

export default PhotoGrid;

/**
 * Created by ShriRam on 2/17/2017.
 */
