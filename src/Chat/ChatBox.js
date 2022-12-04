import './chatstyle.css'
import { useState,useEffect } from 'react';
import ChatBoxMessage from './ChatBoxMessage';
import axios from 'axios';
export default function ChatBox(props){
    const now_user_id = localStorage.getItem('id')
    const [allmessage ,setallmessage] = useState([]);
    const [user ,setuser] = useState({});
    const [isload ,setload] = useState(false);
 
const {user_id,message_all} =props;
useEffect(()=>{
  
   axios.get(`https://mysocial.pythonanywhere.com/users/api/profile/update/${user_id}`,{
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
})
      .then(data=>{
          setuser(data.data.user);
          console.log('sad',data.data.user.image);
          setload(true)
      });
    axios.get(`https://mysocial.pythonanywhere.com/chat/api/chat/${user_id}`,{
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(data=>{
        if(data.status ===200 ){
            console.log(data)
             setallmessage(data.data)
             
        }
       
    });
   
     
},[user_id])
    return(
        <>
        {isload ?<div className="chat-box">
        {allmessage.length ? allmessage.map(item=>(
            <ChatBoxMessage key={item.id} id={item.write_by} message={item.message} photo={user.image[user.image.length-1].photo} date={item.data} />             
))  


:'' }
 {message_all.length ? message_all.map((value,index)=>(
    
    <ChatBoxMessage key = {index} id={now_user_id} message={value[0]} date={value[1]}/>
)) : false}
         
            
        </div>: ''}
       
        </>
    )
}