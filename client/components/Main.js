
/**
    * Created by ShriRam on 2/17/2017.
    */
import React from 'react';
import {Link} from 'react-router';
const Main = React.createClass ({
    render(){

        return(
        <div>
            <h1> <Link to="/">  Reductageam</Link> </h1>
            {React.cloneElement(this.props.children,this.props)}

    </div>
        )
    }



})

export default Main;