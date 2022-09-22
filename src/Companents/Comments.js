import './css/comments.css'
// import ChatBox from "./ChatBox"
export default function Comments(){
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
      <div className="wrappercoment">
      <section className="chat-area">
        <header>
          <a href="users.php" className="back-icon"><i className="fas fa-arrow-left"></i></a>
          <img src="pic-4.png" alt=""/>
        
        </header>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, rerum. Dolorum, assumenda reprehenderit laboriosam earum iure, sunt possimus vel nulla pariatur maxime laudantium eum nesciunt doloribus tempore rem iusto delectus.</p>
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
        <div action="#" class="typing-area">
          <input className='inputchat' type="text" name="message"  placeholder="Type a message here..." autoComplete="off"/>
          <button className='buttoms' ><i class="fab fa-telegram-plane"></i></button>
        </div>
      </section>
    </div>
  
        </>
    )
}