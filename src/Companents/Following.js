import axios from 'axios'
import { useParams } from 'react-router-dom';
import './css/followers.css';
import FollowAndFollowers from './FollowAndFollowers';
import { useEffect,useState } from 'react';
export default function Following(){

    const [isinfo,setinfo] = useState([])
    const value = useParams();
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/users/api/following/${value.id}`,
        {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{setinfo(data.data)})
        .catch(error=>{console.log(error)})
    },[value.id]);
       
    
    return(
        <>
        <div className="container">
        <div className="team_container">
            <div className="text">Meet Our Team</div>
        </div>
        <div className="row">
            {isinfo.length ? 
            isinfo.map(item=>(
                <FollowAndFollowers key={item.id} id={item.my_by.id} username={item.my_by.username} user_image={item.my_by.image[0].photo} />
            ))
            
            :''}
           
           
        </div>
    </div>
        </>
    )

}