import { Link } from "react-router-dom";
import './style.css'
import { useEffect,useState } from "react";
import axios from "axios";
export default function Header(){
  const [user ,setuser] = useState({});
  const [isdowload ,setdowlad] = useState(false);
  
  useEffect(()=>{
    const id =localStorage.getItem('id');
    const token = localStorage.getItem('token')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
      axios.get(`http://127.0.0.1:8000/users/api/profile/update/${id}`,config)
      .then(data=>{
          setuser(data.data.user);
          setdowlad(true)
          console.log(data.data.user,'shex')
      })
  },[])
    return(
        <>{isdowload ? <header>
          <div className="content">
           
            <img src={user.image[user.image.length-1].photo} alt=""/>
            <div className="details">
              <span><Link to='/'>{user.username}</Link></span>
              <p>online</p>
            </div>
          </div>
          <Link to={`/feed/`} className="logout" >Exit</Link>
        </header> : ''}
        
        </>
    )
}