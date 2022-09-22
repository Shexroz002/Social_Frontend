import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import DeletePost from "./DeletePost";
import axios from "axios";
export default function UserPosts(props){
    const value = useParams()
    const user_id = localStorage.getItem('id');
    const {posts} = props;
    const [isId,setId] = useState();
    const [ishow,setshow] = useState(false);
    function likeshow(element,id) {
      const like_count = element.querySelector('.like');
      const like_style = element.querySelector('.bi');
      axios.get(`http://127.0.0.1:8000/feeds/api/post/like/${id}`,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(data=>{
      if(data.status === 201){
        like_count.innerHTML = +like_count.innerHTML+1;
        like_style.style.color = "red";
      }
    })
    .catch(error=>{
      if(error.response.status === 404){
        like_count.innerHTML = +like_count.innerHTML-1;
        like_style.style.color = "white";
      }
    })
    }
    function deletepost(post_id){
      const post = document.querySelector(`#`+ post_id);
      post.remove()
    }
    function postdelete(id){
      setshow(prev=>!prev);
      setId(id);
      console.log(id,'is')
    }
    function showdelete(){
      setshow(prev=>!prev);
    }
    return(
      <>
        <div className="contenerprofile">

      <h3 className="title"> My Posts</h3>
      <div className="products-contenerprofile">
        {posts.map(item=>(
    <div key={item.id} id={`${item.id}`} className="product" data-name="p-1">
            <img src={item.post_image} alt="" />
            <h3>{item.post_title}</h3>
            {user_id === value.id ?
            <div className="card-button">
            <Link to={`/post/update/${item.id}`} id='link' > <button className="btn-blue"><i className="bi bi-trash3-fill"></i> Update </button> </Link>
          <button onClick={()=>{postdelete(item.id);console.log('sad')}} className="btn-orange"><i className="bi bi-pen-fill"></i> Delete</button>
        </div>
         : 
         <div className="card-button">
          <button className="btn-blue"><i className="bi bi-trash3-fill"></i> Comment </button> 
          <button onClick={(e)=>{likeshow(e.target,item.id)}}  className="btn-orange"><i className="bi bi-heart-fill" style={{color:item.like.some((item)=>(item.id.toString()===user_id.toString())) ? 'red':'white'}}></i> <p style={{display:'inline'}} className='like'>{item.like.length}</p> Like</button>
        </div>
         }
        { ishow ? <DeletePost id={isId} showdelete={showdelete} deletepost={deletepost}  /> : '' }
         </div>
        ))}
         
   
        
   
      </div>
   
   </div></>
    )
}