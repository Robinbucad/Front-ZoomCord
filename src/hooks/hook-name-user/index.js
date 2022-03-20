import {useEffect, useState } from "react";


export function useUsername(){
    const [idUser, updateIdUser] = useState([])
    const [user,upadateUser] = useState([])
    const token = sessionStorage.getItem('token')
    const tokenLocal = localStorage.getItem('token')

    useEffect(() => {
        fetch(`http://localhost:3001/users`,{
            method:'get',
            headers:{
                Authorization: `Bearer ${token || tokenLocal}`
            }
        })
        .then(r => r.json())
        .then(d => {   
            updateIdUser(d._id)
            upadateUser(d)
        })
    },[])

    return {user,upadateUser,idUser}

}