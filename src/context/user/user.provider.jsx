import { useState } from "react"
import { useUsername } from "../../hooks/hook-name-user"
import { UserContext } from "./user.context"

const userId = localStorage.getItem('user')

function UserProvider({children}){

    const user= useState(userId)
    console.log(user)
    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider