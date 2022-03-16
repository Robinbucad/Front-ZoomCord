import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

export function useUsername(){
    const [idUser, updateIdUser] = useState([])
    const [user,upadateUser] = useState([])
    const token = sessionStorage.getItem('token')
 

    useEffect(() => {
        fetch(`http://localhost:3001/users`,{
            method:'get',
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(r => r.json())
        .then(d => {

            upadateUser(d)
        })
    },[])

    return {user}

}