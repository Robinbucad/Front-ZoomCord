import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

export function useUsername(){
    const [username, updateUsername] = useState([])
    
    let { id } = useParams()
    console.log(id)
    useEffect(() => {
        fetch(`http://localhost:4000/users/${id}`)
        .then(r => r.json())
        .then(d => updateUsername(d.username))
    })


    return username

}