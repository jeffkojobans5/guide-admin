import { useState , createContext } from "react"

export const UserContext = createContext()

export function UserProvider ({children}) {

    const [ user , setUser ] = useState(localStorage.getItem('username'))
    
    return (    
        <UserContext.Provider value={{
            user ,
            setUser
        }}>
            { children }
        </UserContext.Provider>
    )
}