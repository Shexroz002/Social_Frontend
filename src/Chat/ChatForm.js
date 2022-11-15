import './chatstyle.css'
import { useState } from 'react';
export default function ChatForm(props){
    const [message,setmessage] = useState('')
    const {get_message} = props;
    function onkey(){
        const form = document.querySelector(".typing-area"),
         inputField = form.querySelector(".input-field"),
        sendBtn = form.querySelector("button");
        if(inputField.value !== ""){
            sendBtn.classList.add("active");
        }else{
            sendBtn.classList.remove("active");
        }
    }
    function send_data(){
        get_message(message)
        const input_mess= document.querySelector('#inputmessage');
        input_mess.value=''
    }
    const get_data = (e)=>{
        setmessage(e.target.value)
    }

    return(
        <>
       <div  className="typing-area">
          <input id='inputmessage' onKeyUp={onkey}  onChange={get_data}  type="text" name="message" className="input-field" placeholder="Type a message here..." />
          <button onClick={send_data}><i className="fab fa-telegram-plane"></i></button>
        </div>
        
        </>
        // onClick={(e)=>{e.preventDefault();}}
    )
}