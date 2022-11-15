import '../Companents/css/profile.css'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';
export default function UsProfile(porps){
  const[isdata,setdata] = useState([]);
  const {user,post_count,follow} = porps;
  const value = useParams();
  const user_id = localStorage.getItem('id');
  let user_list = localStorage.getItem('followers').split(',');

// useEffect(()=>{
//   axios.get(`http://127.0.0.1:8000/users/follow/and/followers/${value.id}`,
//   { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
// })
// .then(data=>{
//   console.log(data,'shexr');
//   setdata(data)
// })
// },[value.id])

console.log(follow,'shex');


  function following(element) {
    axios.post(`http://127.0.0.1:8000/users/api/followers/${user_id}`,{'sa':8},
    { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  })
  .then(data=>{
    if(data.status === 201){
      element.innerHTML='Following';
      element.style.background = "red";
      
    }
  })
  .catch(error=>{
    if(error.response.status === 404){
      element.innerHTML='Follow';
      element.style.background = "blue";
    }
  })
  }
    return(
        <>
        <Link to={`/feed`}  ><i className="fas fa-arrow-left"></i>Exit</Link>
        <Link to={`/profile/image/${user.id}/`}><div className="img">
        <img src={user.image[user.image.length-1].photo} alt="wd" width="100%" />
      </div></Link>

      <div className="cnt">
        <div className="name">{user.username}</div>
        <div className="txt">{user.first_name},{user.last_name}<br/>
          {/* <strong>Email:{user.email}</strong> */}
        </div>
        <i className="fas fa-thumbtack"></i>
        <strong>Samarkand, Uzbekistan</strong>

        <div className="card-inf">
          <div className="item">
            <div className="title">{follow.followers}</div>
            <div className="txt">Folowers</div>
          </div>

          <div className="item">
            <div className="title">{follow.following}</div>
            <div className="txt">Folowing</div>
          </div>

          <div className="item">
            <div className="title">{post_count}</div>
            <div className="txt">Post</div>
          </div>

        <div className="card-social">
          <a href="https://www.facebook.com/codingplayfb/" className="facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="sad" className="twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/codingplay.insta/" className="instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/jamshidelmi" className="github">
            <i className="fab fa-github"></i>
          </a> {user_id === value.id ?
         <div className="card-button">
         <Link to={`/createpost`} id='link' > <button className='select-image' >Create Post</button></Link>
         <Link to={`/updateprofile`} id='link' > <button className='select-image' >Update Profile</button></Link>
        </div>
        : 
        <div className="card-button">
          <button className='select-image' style={{background:'green'}}>Message</button><br/>
          <button className='select-image' onClick={(e)=>{following(e.target)}}  
          style={{background:user_list.some((item)=>(+item===+user_id.toString())) ? 'red': 'blue'}}>{user_list.some((item)=>(item===user_id.toString())) ? 'Following': 'Follow'}</button>
        </div>}
        </div>
        <div><h1>.</h1></div>
       
        

      </div>
    </div>
        
        </>
    )
}