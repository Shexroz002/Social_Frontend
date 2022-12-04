import CommentBox from './ComentBox';
import './css/comments.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect ,useState } from 'react';
import CommentForm from './CommentForm';
import axios from 'axios';
export default function Comments(){
  const[isinfo,setinfo] = useState([])
  const[isinfocomments,setinfocomments] = useState([])
  const[isload,setload] = useState(false)
  const value = useParams()
  console.log(value)
    useEffect(()=>{
      axios.get(`https://mysocial.pythonanywhere.com/feeds/api/post/comments/${value.id}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            console.log(data)
            setinfo(data.data.post_data)
            setinfocomments(data.data.comments)

            setload(prev=>!prev)
        })
        .catch(error=>{
            console.log(error)
        })

    },[value.id])
    function update_comments(key,data){
      const newdate = [];
      newdate.push(data);

      if(key ===0){
        setinfocomments(prev=>prev=[...newdate,...prev.slice(1,)])
      }
      else{
        if(key >= 1 && key <= isinfocomments.length){
        setinfocomments(prev=>prev=[...prev.slice(0,key),...newdate,...prev.slice(key+1,)])
      }else{if(key === isinfocomments.length){
        setinfocomments(prev=>prev=[...prev.slice(0,isinfocomments.length-1),...newdate])
      }}
      
      }
    }
    function delete_comment(key_id){
      setinfocomments(prev=>prev=prev.filter((item)=>item.id !== key_id))
    }

  function get_message(message){
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    if(message !==''){
      const send_message = new FormData()
      send_message.append('comment',message)
      axios.post(`https://mysocial.pythonanywhere.com/feeds/api/post/comments/${value.id}`,send_message,config)
    .then(data=>{
      if(data.status ===201){
        const date_message= []
        date_message.push(data.data)
        setinfocomments(prev=>[...prev,...date_message])
      }
    })
    }
  }

    return(
  <>
        <div className="wrappercommnet">
      <section className="chat-area">
        {isload ? 
        <><header>
          <Link to="/feed/" className="back-icon"><i className="fas fa-arrow-left"></i></Link>
          <img className='commentimage' src={isinfo.post_image} alt=""/>
        
        </header>
        <p style={{textAlign:'center'}}>{isinfo.post_title}</p></>
        : <h1>No found</h1>}
        <CommentBox comments={isinfocomments} update_comments={update_comments} delete_comment={delete_comment} />
        <CommentForm  get_message={get_message} />
      </section>
    </div>
  
        </>
    )
}