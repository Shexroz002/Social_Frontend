import './style.css'
import User from "./User"
import Search from './Search'
import { useState,useEffect } from "react";
import axios from 'axios'
export default function UserList(){
    const [users ,setusers] = useState([]);
    const [filter_user ,setfilter_user] = useState([]);
    const [loading,setLoading] = useState(false);
   
    useEffect(()=>{
        const token = localStorage.getItem('token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.get('https://mysocial.pythonanywhere.com/users/api/user/list',config)
        .then(data=>{
            if(data.status === 200){
                setusers(data.data);
                setfilter_user(data.data)
                setLoading(true)
            }
        })
    },[])
    function user_filter(info){
        if(users.length){
           const newfilter = users.filter(
            user=>{
                return(
                    user.username.toLowerCase().includes(info.toLowerCase())
                )
            }
           )
           setfilter_user([...newfilter])
        }
        else{
            setfilter_user([...users])
        }
        
    }
    return(
        <>
        <Search user_filter={user_filter} />
        <div className="userslist">
    
    {loading ? filter_user.map(move=>(
      <User key={move.id} {...move} />
    )):<h1>Nothing Found</h1>}
        </div></>
    )
}