import { useState } from "react"
import { UserContext } from "./user.contex"


function UserProvider({children}){
    
    const[ user, setUser] = useState([])
    const [userId,setUserId] = useState('')
    return(
        <UserContext.Provider value={[user,setUser,userId,setUserId]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider