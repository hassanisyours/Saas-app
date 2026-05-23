import { createContext, useContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props)=>{
        const [user, setuser] = useState(false);
        const [ShowLogin, setShowLogin] = useState(false)
        const value = {user,setuser,ShowLogin,setShowLogin}

        return (
            <AppContext.Provider value={value}>
                {props.children}
            </AppContext.Provider>
        )
}
export default AppContextProvider;