
export default function ChatBoxMessage(props){
    const {id,photo,message,date} = props;
    const now_user_id = localStorage.getItem('id')
    console.log(photo);
    return(
       <>
       {+id ===  +now_user_id ? <div className="chat outgoing">
              <div className="details">
                  <p>{message}<br/><span style={{fontSize: "0.7rem",color: "aqua"}}>{new Date(date).getHours()} : {new Date(date).getMinutes()} </span></p>
              </div>
              </div> : <div className="chat incoming">
              <img src={photo} alt=""/>
              <div className="details">
                  <p>{message}<br/><span style={{fontSize: "0.7rem",color:"blue"}}>{new Date(date).getHours()} : {new Date(date).getMinutes()}</span></p>
              </div>
              </div>}
       </>
    )
}