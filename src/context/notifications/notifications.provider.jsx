import { useState } from "react"
import { SetNotifications } from "./notifications.context"


function NotificationProvider({children}){

    const [notiLength,setNotiLength] = useState(1)

    return(
        <SetNotifications.Provider value={[notiLength,setNotiLength]}>
            {children}
        </SetNotifications.Provider>
    )
}

export default NotificationProvider