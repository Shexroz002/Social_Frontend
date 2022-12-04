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
    axios.get(`https://mysocial.pythonanywhere.com/users/api/profile/update/${id}`,config)
    .then(data=>{
        setuser(data.data.user)
        setload(true)
    })
},[props])
    return(
        <>{isload ?  <header>
        <Link to={`/users/list/`} className="back-icon" ><i className="fas fa-arrow-left"></i></Link>
          
          <div className="details">
            <img style={{width:'50px',height:'50px',paddingLeft:'5px',display:'inline-block'}}  src={user.image[user.image.length-1].photo} alt=""/>
            <span>{user.username}</span>
            <p style={{color:'green'}}>Online</p>
          </div>
        </header> : '' }
      
        </>
    )
}