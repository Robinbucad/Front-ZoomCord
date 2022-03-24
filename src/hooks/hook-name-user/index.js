import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user/user.contex";


export function useUsername() {
    
    const token = sessionStorage.getItem('token')
    const [userHook,setUserHook] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
     
                const res = await fetch('http://localhost:3001/users',{
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const dat = await res.json()
                setUserHook(dat)
                console.log(userHook)
        }
        fetchUsers()
    }, [userHook])
    return { userHook }

}