import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user/user.contex";


export function useUsername() {
    const [user, setUser, userId, setUserId] = useContext(UserContext)
    const token = sessionStorage.getItem('token')
    
    useEffect(() => {
        const fetchUsers = async () => {
     
                const res = await fetch('http://localhost:3001/users',{
                    method: 'get',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const dat = await res.json()
                sessionStorage.setItem('iduser',dat._id)
                setUser([dat])
                setUserId(dat._id)    
        }
        fetchUsers()
    }, [userId])
    return { user }

}