import './style.css';
import { useState,useEffect } from "react";
import axios from "axios";
import Feed from "./Feed";
export default function Feeds(){
    const [isPosts,setPosts]=useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/feeds/api/post',{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            console.log(data)
            setPosts(data.data)
        })
        .catch(error=>{
            console.log(error)
        })

    },[])
return(
    <div className="feeds">    
        {isPosts.length ? isPosts.map((item) =>(
            <Feed  
            key={item.id}
            id={item.id}
            username={item.post_creator.username} 
            user_image={item.post_creator.image[0]} 
            post_image={item.post_image} 
            post_title={item.post_title}
            create_by = {item.create_by}
            like = {item.like}

            />
        )

       )   : ''}
            </div>
)
}