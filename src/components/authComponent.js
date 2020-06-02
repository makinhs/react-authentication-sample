import React, {useContext, useEffect} from "react";
import {MainContext} from '../contexts/MainContext.js'
import {useHistory} from "react-router-dom";

function AuthComponent(props) {
    const {jwt} = useContext(MainContext);
    const history = useHistory();

    useEffect(()=>{
        if(jwt === '' || !jwt){
            history.push('/')
        }
    }, []);

    return (
        <div>
            {props.children}
        </div>
    )
}

export default AuthComponent