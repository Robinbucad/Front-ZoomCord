import { useEffect, useState } from "react";


export function useFriends(){
    const [friends, updateFriends] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/users/')
        .then(r => r.json())
        .then(d => updateFriends(d.users))
    },[])


    return (friends)

}