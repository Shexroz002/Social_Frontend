import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './css/followers.css';
import FollowAndFollowers from './FollowAndFollowers';
import { useEffect,useState } from 'react';
export default function Following(){

    const [isinfo,setinfo] = useState([])
    const value = useParams();
    useEffect(()=>{
        axios.get(`https://mysocial.pythonanywhere.com/users/api/following/${value.id}`,
        {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{setinfo(data.data)})
        .catch(error=>{console.log(error)})
    },[value.id]);
       
    
    return(
        <>
        <div className="container">
        <div className="team_container">
            <div className="text">Following</div><Link to={`/profile/${localStorage.getItem('id')}`} className="back-icon" ><i className="fas fa-arrow-left"></i>Exit</Link>
        </div>
        <div className="row">
            {isinfo.length ? 
            isinfo.map(item=>(
                <FollowAndFollowers key={item.id} id={item.friend_by.id} username={item.friend_by.username} user_image={item.friend_by.image[item.friend_by.image.length-1].photo} />
            ))
            
            :''}
           
           
        </div>
    </div>
        </>
    )

}