import '../Companents/css/profile.css'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function UsProfile(porps){
  const {user,post_count} = porps;
  const value = useParams();
  const user_id = localStorage.getItem('id');
  let user_list = localStorage.getItem('followers').split(',');
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
        <div className="img">
        <img src="image.jpg" alt="wd" width="100%" />
      </div>

      <div className="cnt">
        <div className="name">{user.username}</div>
        <div className="txt">{user.first_name},{user.last_name}<br/>
          {/* <strong>Email:{user.email}</strong> */}
        </div>
        <i className="fas fa-thumbtack"></i>
        <strong>Samarkand, Uzbekistan</strong>

        <div className="card-inf">
          <div className="item">
            <div className="title">3.2M</div>
            <div className="txt">Folowers</div>
          </div>

          <div className="item">
            <div className="title">56</div>
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
          </a>
        </div>
        {user_id === value.id ?
         <div className="card-button">
         <Link to={`/createpost`} id='link' > <button className="btn-blue">Create Post</button></Link>
         <Link to={`/updateprofile`} id='link' > <button className="btn-orange">Update Profile</button></Link>
        </div>
        : 
        <div className="card-button">
          <button className="btn-blue">Message</button>
          <button onClick={(e)=>{following(e.target)}} className="btn-orange" style={{background:user_list.some((item)=>(item===user_id.toString())) ? 'red': 'blue'}}>{user_list.some((item)=>(item===user_id.toString())) ? 'Following': 'Follow'}</button>
        </div>}
        

      </div>
    </div>
        
        </>
    )
}