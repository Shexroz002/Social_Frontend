import Header from "./Header"
import ChatBox from "./ChatBox"
import ChatForm from "./ChatForm"
import { useParams } from "react-router-dom"
import { useState } from "react";
import './chatstyle.css'
import axios from "axios"
export default function Chat(){
  const [message_all,setmessage_all] = useState([])
  let value =useParams();
  function get_message(message){
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    if(message !==''){
      const send_message = new FormData()
      send_message.append('message',message)
      axios.post(`https://mysocial.pythonanywhere.com/chat/api/chat/${value.id}`,send_message,config)
    .then(data=>{
      if(data.status ===201){
        const date_message= []
        date_message.push(message)
        date_message.push(new Date())
        setmessage_all(prev=>[...prev,date_message])

      }
    })
    }
  }
    return(
        <>
        <div className="wrappersh">
      <section className="chat-area">
            <Header id={value.id} />
            <ChatBox user_id={value.id} message_all={message_all} />
            <ChatForm get_message = {get_message} />
      </section>
      </div>
        </>
    )
}