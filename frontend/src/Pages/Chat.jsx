import axios from "axios";
import { useEffect, useState } from "react";


export default function Chat() {
    const [chats, setChats] = useState([]);

    const fetchChats = async ()=>{
        const {data} = await axios.get('http://localhost:5000/api/chat')

        setChats(data)
    };

    useEffect(()=>{
        fetchChats();
    },[]);

  return (
    <div>
        {chats.map((chat,index)=>(
            <div key={index} style={{color:"black"}}>{chat.chatName}</div>
        ))}
    </div>
  )
}
