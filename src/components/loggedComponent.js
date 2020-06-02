import React, {useEffect, useContext, useState} from 'react';
import {MainContext} from '../contexts/MainContext';

function LoggedComponent(props) {
    const {jwt} = useContext(MainContext);
    const [parsedJwt, updateParsedJwt] = useState('')
    useEffect(()=>{
        try{
            updateParsedJwt(JSON.parse(atob(jwt.split('.')[1])))
        }catch(err){
            updateParsedJwt('Not a valid JWT found')
        }
    }, []);

    return (
        <div>
            {JSON.stringify(parsedJwt)}
        </div>
    )

}

export default LoggedComponent