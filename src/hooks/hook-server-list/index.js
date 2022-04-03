import {useEffect, useState} from 'react'

export const useServers = () => {
    const [servers, setServers] = useState([])
    const token = sessionStorage.getItem('token')
    useEffect(() => {
        const getServs = async () => {
            try {
                const res = await fetch('https://aqueous-ocean-87434.herokuapp.com/servers', {
                    method: 'get',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const dat = await res.json()
                setServers(dat)
            } catch (err) {
                console.log(err)
            }
        }
        getServs()
    }, [])
    return {servers}
}