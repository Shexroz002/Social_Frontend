import { useState } from "react";
export default function CommentForm(props){
    const [message,setmessage] = useState('')
    const {get_message} = props;
    function seninfo(){
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
        const input_mess= document.querySelector('.input-field');
        input_mess.value=''
        setmessage('')
    }
    const get_data = (e)=>{
        setmessage(e.target.value)
        
    }
    return(
        <>
        <div action="#" className="typing-area">
          <input  onKeyUp={seninfo} onChange={get_data} type="text" className='input-field' name="message"  placeholder="Type a message here..." autoComplete="off" />
          <button onClick={send_data} ><i className="fab fa-telegram-plane"></i></button>
        </div>
        </>
    )
}