import { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { UserContext } from "../../context/user/user.context";

export function useUsername(){
    const [idUser, updateIdUser] = useState([])
    const [user,upadateUser] = useState([])
    const token = sessionStorage.getItem('token')
    const [userContext,updateUserContext] = useContext(UserContext)

    useEffect(() => {
        fetch(`http://localhost:3001/users`,{
            method:'get',
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(r => r.json())
        .then(d => {
            updateUserContext(d._id)
            localStorage.setItem('user', d._id)
            upadateUser(d)
        })
    },[])

    return {user,upadateUser}

}