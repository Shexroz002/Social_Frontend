import './chatstyle.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Header(props){
  const [user ,setuser] = useState({});
  const [isload ,setload] = useState(false);
  
useEffect(()=>{
  const {id} =props;
  const token = localStorage.getItem('token')
  const config = {
    headers: { Authorization: `Bearer ${token}` }
};
    axios.get(`http://127.0.0.1:8000/users/api/profile/update/${id}`,config)
    .then(data=>{
        setuser(data.data.user)
        setload(true)
    })
},[props])
    return(
        <>{isload ?  <header>
        <Link to={`/users/list/`} className="back-icon" ><i className="fas fa-arrow-left"></i></Link>
          <img   src={user.image[user.image.length-1].photo} alt=""/>
          <div className="details">
            <span>{user.username}</span>
            <p>Online</p>
          </div>
        </header> : '' }
      
        </>
    )
}