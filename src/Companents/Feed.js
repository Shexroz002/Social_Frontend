import Likeimage from "./LikeImage";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link , } from "react-router-dom";
export default function Feed(props){
    const {id,username,userid,user_image,post_image,post_title,create_by,like,status,delete_post,favorite_post} = props;
    const user_id = localStorage.getItem('id')
    console.log('users',user_id)
    function likeshow(element,id) {
        const like = document.getElementById(`${id}`);
        const like_count = parseInt(like.innerHTML)
        axios.get(`http://127.0.0.1:8000/feeds/api/post/like/${id}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .then(data=>{
        element.classList.remove('bi-heart');
        element.classList.add('bi-heart-fill');
        element.style.color = 'red';
        like.innerHTML=`${like_count + 1} other`;
      })
      .catch(error=>{
        element.classList.remove('bi-heart-fill');
        element.classList.add('bi-heart');
        like.innerHTML=`${like_count - 1} other`;

      })
      }



    function add_favorite_post(id){
        axios.get(`http://127.0.0.1:8000/feeds/api/favorite/post/${id}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
        )
        .then(data=>{
            toast.success('This post had saved successfully!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
        .catch(error=>{
            toast.info('This post already had saved!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
    
        })
    }
    function delete_favorite_post(id){
        axios.delete(`http://127.0.0.1:8000/feeds/api/favorite/post/${id}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
        )
        .then(data=>{
           
        })
        .catch(error=>{
            toast.error('This post had deleted!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                
        })
    }
    console.log(user_image,'sheximage')
    return(
        
        <div className="feed" key={id}>
            <ToastContainer />
                    <div className="head">
                        <div className="user">
                            <div className="profile-photo">
                                <img src={user_image.image[user_image.image.length-1].photo} alt="ssadsad" />
                            </div>
                            <div className="ingo">
                                <h3><Link to={`/profile/${userid}`}>{username}</Link></h3>
                                <small>{post_title}, {create_by}</small>
                            </div>
                        </div>
                        <span className="edit">
                            <i className="uil uil-ellipsis-h"></i>
                        </span>
                    </div>

                    <div className="photo">
                        <img src={post_image} alt="sdds" />
                    </div>

                    <div className="action-buttons">
                        <div className="interaction-button">
                            <span onClick={(e)=>{likeshow(e.target,id)}} className="like">
                                {like.some((item)=>(item.id.toString()===user_id.toString())) ?
                                  <i style={{color:'red'}} className="bi bi-heart-fill"></i>: 
                                  <i  className="bi bi-heart"></i>}</span>
                            <span><Link to={`/comments/${id}`}><i className="uil uil-comment-dots"></i></Link> </span>
                            <span><i className="uil uil-share-alt"></i></span>
                        </div>
                        <div className="bookmark">
                            <span onClick={()=>{ if( status=== 'favorite'){delete_favorite_post(id);delete_post(id)}else{add_favorite_post(id);}}}>{favorite_post ?<i class="uil uil-trash-alt"></i> : <i className="uil uil-bookmark-full"></i>}</span>
                        </div>
                    </div>
                    <div className="liked-by">
                        {like.length ? like.map(item=>(
                            <>
                            <Likeimage likeimage={item.image[item.image.length-1].photo} />
                            </>
                            
                        )) :''}
                       
                        <p>Liked by <b>{like.length ? like[0].username :'Not found'}</b> and <b id={id}>{like.length} other</b></p>
                    </div>

                    {/* <div className="caption">
                        <p><b>Lana Rose</b> Lorem ipsum dolor sit quisquam eius. <span className="harsh-tag">#lifestyle</span></p>
                    </div>

                    <div className="comments text-muted">View all 277 comments</div> */}
                </div>
    )
}