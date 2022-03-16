import { useEffect, useState } from "react";
import { useUsername } from "../../../hooks/hook-name-user";
import Message from "../message";
import Conversation from "../conversation";
import './style.css'

function Messenger() {
    const token = sessionStorage.getItem('token')
    const [conversations, setConversations] = useState([])
    const { user } = useUsername()
    const [currentChat, setCurrentChat] = useState('')
    const [messages, setMessages] = useState([])


    useEffect(() => {
        const getConversations = async () => {

            const res = await fetch('http://localhost:3001/conversation', {
                method: 'get',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const dat = await res.json()
            setConversations(dat)
  

        }
        getConversations()
    }, [user])



    useEffect(() => {
        const getMessages = async () => {
            try{
                const res = await fetch(`http://localhost:3001/message/62323d18a7fc5967ec9ce831`,{
                    method:'get',
                    headers:{
                        Authorization: `Bearer ${token}`
                    },
                })
                const dat = await res.json()
                setMessages(dat)
                console.log(dat)
            }catch(err){
                console.log('error')
            }
        };
        getMessages()
    },[currentChat])
    

    return (
        <div className="container-msg">
            <div className="conversation">
                {conversations.map((e, i) => (
                    <div onClick={() => setCurrentChat(e)}>
                        <Conversation key={i} conversation={e} currentUser={user}></Conversation>
                    </div>
                ))}

            </div>
            <div className="chat-box">

                {

                    currentChat ?
                        <div>

                            <Message></Message>
                            <Message></Message>
                            <Message></Message>
                            <Message></Message>
                            <div>
                                <input type='text' placeholder='Escriba algo'></input>
                            </div>
                        </div> : <p>Open conversation to start a chat</p>
                }

            </div>

            <div className="user-active">
                <p>users</p>
            </div>


        </div>
    )
}

export default Messenger