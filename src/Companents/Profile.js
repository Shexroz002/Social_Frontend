import rsa from "./profile-14.jpg"
import './style.css'
import { Link } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from "axios"
export default function Profile(){
    const [isprofile,setprofile] = useState({});
    const [isload,setload] = useState(false)
    useEffect(()=>{
        axios.get(`https://mysocial.pythonanywhere.com/users/api/profile/update/${localStorage.getItem('id')}`,{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            setprofile(data.data.user)
            console.log(data.data.user,'Lola')
            setload((prev)=>!prev)
        })
        .catch(error=>{
            console.log(error)
        })

    },[])
    return(
        <>
        {!isload ? '' : 
        <><Link to={`/profile/${localStorage.getItem('id')}`} className="profile">
            <div className="profile-photo">
                <img src={isprofile.image[isprofile.image.length-1].photo} alt="no imae"/>
            </div>
            <div className="handle">
                <h4>{isprofile.first_name} {isprofile.last_name}</h4>
                <p className="text-muted">
                    @{isprofile.username}
                </p>
            </div>
        </Link>
        </> }</>
        
    )
}