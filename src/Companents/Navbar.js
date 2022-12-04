import './style.css';
import { useEffect,useState } from 'react';
import rsa from "./profile-14.jpg"
import { Link } from "react-router-dom";
import axios from 'axios';
export default function Navbar(){
    const [isprofiles,setprofiles] = useState({});
    const [isload,setload] = useState(false)
    useEffect(()=>{
        axios.get(`https://mysocial.pythonanywhere.com/users/api/profile/update/${localStorage.getItem('id')}`,{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            setprofiles(data.data.user)
            console.log(data.data.user,'Lola')
            setload((prev)=>!prev)
        })
        .catch(error=>{
            console.log(error)
        })

    },[])
    return(
        <>
        <nav>
        <div className="container">
            <h2 className="log">
                nokoSocial
            </h2>
            <Link to='/users/search/'><div className="search-bar">
                <i className="uil uil-search"></i>
                <input type="search" placeholder="Search for creators, inspirations, and projects"/>
                
            </div></Link>
            <div className="create">
            <Link to='/createstory/'><label className="btn btn-primary" for="create-post">Create Story</label></Link>
                {isload ? <Link to={`/profile/${localStorage.getItem('id')}`}> <div className="profile-photo">
                    <img src={isprofiles.image[isprofiles.image.length-1].photo} alt="sas"/>
                </div></Link> : ''}
                
            </div>
        </div>
    </nav>
        </>
    )
}