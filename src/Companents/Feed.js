import Likeimage from "./LikeImage";
import axios from "axios";
export default function Feed(props){
    const {id,username,user_image,post_image,post_title,create_by,like} = props;
    const user_id = localStorage.getItem('id')
    console.log(like[0].id.toString(),'users',user_id)
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
    return(
        <div className="feed">
                    <div className="head">
                        <div className="user">
                            <div className="profile-photo">
                                <img src={user_image} alt="ssadsad" />
                            </div>
                            <div className="ingo">
                                <h3>{username}</h3>
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
                            <span> <i className="uil uil-comment-dots"></i></span>
                            <span><i className="uil uil-share-alt"></i></span>
                        </div>
                        <div className="bookmark">
                            <span><i className="uil uil-bookmark-full"></i></span>
                        </div>
                    </div>

                    <div className="liked-by">
                        {like.length ? like.map(item=>(
                            <>
                            <Likeimage likeimage={item.image[0]} />
                            </>
                            
                        )) :''}
                       
                        <p>Liked by <b>{like[0].username}</b> and <b id={id}>{like.length} other</b></p>
                    </div>

                    {/* <div className="caption">
                        <p><b>Lana Rose</b> Lorem ipsum dolor sit quisquam eius. <span className="harsh-tag">#lifestyle</span></p>
                    </div>

                    <div className="comments text-muted">View all 277 comments</div> */}
                </div>
    )
}