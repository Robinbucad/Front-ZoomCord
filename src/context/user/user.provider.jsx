import { useState } from "react"
import { UserContext } from "./user.contex"


function UserProvider({children}){
    const userLocal = localStorage.getItem('user')
    const userData = JSON.parse(userLocal)
    const[ user, setUser] = useState(userData)

    return(
        <UserContext.Provider value={[user,setUser]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider