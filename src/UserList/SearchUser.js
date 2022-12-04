
import { useState,useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import './usersearch.css';
import ImageSearch from "../Companents/ImageSearch";
export default function SearchUser(){
  const [IsUserList,SetUserList]  = useState([]);
  const [IsPost,SetPost]  = useState([]);
  const [IsinputValue,SetinputValue]  = useState('');
  const [IsFilterUser,SetFilterUser]  = useState([]);
  const [IsLoading,setLoading]  = useState(false);
  useEffect(()=>{
    const token = localStorage.getItem('token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    axios.get('https://mysocial.pythonanywhere.com/users/api/user/list',config)
    .then(data=>{
        if(data.status === 200){
            SetUserList(data.data)
            SetFilterUser(data.data)
            setLoading(true)
        }
    })
},[])

useEffect(()=>{
  axios.get('https://mysocial.pythonanywhere.com/feeds/api/post',{
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  })
  .then(data=>{
     
      SetPost(data.data)
  })
  .catch(error=>{
      console.log(error)
  })

},[])

function user_filter(info){
  console.log(info,'ma')
  if(IsUserList.length){
     const newfilter = IsUserList.filter(
      user=>{
          return(
              user.username.toLowerCase().includes(info.toLowerCase())
          )
      }
     )
     SetFilterUser([...newfilter])
  }
  else{
    SetFilterUser([...IsUserList])
  }
  
}
const filter_user = (e)=>{
  user_filter(e.target.value);
  SetinputValue(e.target.value);
}

    return(
        <>
        <div>
       
         <div className="containersearch"> 
        
      <header className="headersearch"> <Link to={`/feed/`}  ><i style={{color:'white'}} className="fas fa-arrow-left">Exit</i></Link>
        <h4 className="titlesearch">Search by username</h4>
        <input onChange={filter_user} className="headersearchinput" type="text" id="filter" placeholder="Search" />
      </header>
{IsinputValue.length ? 
      <ul id="result" className="user-listsearch">
        {IsLoading ? IsFilterUser.map(item=>(
          <li>
        <img src={item.image[item.image.length-1].photo} alt="asd" className="user-listimg" />
        <div class="user-info">
            <Link to={`/profile/${item.id}`}><h4 className="searchh4">{item.username}</h4></Link>
            <p class="searchp">{item.last_name}  {item.first_name} </p>
        </div></li>
        )) : 
        <li>
          <h3>Loading...</h3>
        </li> 
        }
       
        
      </ul>: ''}
    </div> 
    { !IsinputValue.length ? <ImageSearch data ={IsPost} /> :''}
    <div className="toggler-container">
      <input type="checkbox" id="switch" />
      <label for="switch"></label>
    </div>
        </div>
        
        </>
    )
}