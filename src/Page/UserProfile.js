import UserPosts from '../Companents/UserPosts';
import UsProfile from '../Companents/UsProfile';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function UserProfile(){
    const value = useParams()
    const[isdata,setdata] = useState([]);
    const [isUserInfo,setUserInfo] = useState([])
    const [isload,setload] = useState(false)
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/users/api/profile/update/${value.id}`,{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            setUserInfo(data.data)
            setload((prev)=>!prev)
        })
        .catch(error=>{
            console.log(error)
        })
        axios.get(`http://127.0.0.1:8000/users/follow/and/followers/count/${value.id}`,{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            setdata(data.data)
            
        })
        .catch(error=>{
            console.log(error)
        })

    },[value.id])
    console.log('shex',isload)
    return(
        <div className="wrapperprofile">
    <div className="card">
        {!isload ? <h1>Sa</h1> :  
        <><UsProfile follow={isdata} user={isUserInfo.user} post_count = {Object.keys(isUserInfo.post).length} /> <UserPosts posts={isUserInfo.post} />
        </>}
        </div>
        </div>
    )
}