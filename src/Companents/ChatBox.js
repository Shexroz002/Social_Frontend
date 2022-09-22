export default function ChatBox(){
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
    return(
        <>
        <div className="chat-box">
          <div className="chat outgoing">
            <div className="details">
                <p>Salom</p>
            </div>
            </div>
            <div className="chat incoming">
              <img src="pic-2.png" alt=""/>
              <div className="details">
                  <p>Assalomu alaykum</p>
              </div>
              </div>
        </div>
        <form action="#" className="typing-area">
          <input onKeyUp={seninfo} type="text" name="message" className="input-field" placeholder="Type a message here..." autocomplete="off"/>
          <button><i className="fab fa-telegram-plane"></i></button>
        </form>
        </>
    )
}