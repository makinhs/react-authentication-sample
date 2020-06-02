import React, {useState} from "react"

const MainContext = React.createContext();

function MainContextProvider({children}) {
    const [jwt, setJwt] = useState('');

    return (
        <MainContext.Provider value={{jwt, setJwt}}>
            {children}
        </MainContext.Provider>
    )
}

export {MainContextProvider, MainContext}