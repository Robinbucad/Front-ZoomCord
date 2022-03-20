import { useEffect, useState } from "react";


export function useFriends(){
    const [friends, updateFriends] = useState([])
    const token = sessionStorage.getItem('token')



    useEffect(() => {
        
        fetch('http://localhost:3001/users/friends',{
            method:'get',
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(r => r.json())
        .then(d => updateFriends(d))
    },[])


    return {friends}

}