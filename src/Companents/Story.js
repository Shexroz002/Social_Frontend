
import './style.css'
import axios from "axios"
import { useState , useEffect } from "react"
export default function Story(){
    const [isStory,setStory] = useState([])
    const [isload,setload] = useState(false)
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/feeds/api/story',{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            console.log(data.data[0].story_creator.image[0].photo,'user')
            setStory(data.data)
            setload((prev)=>!prev)
        })
        .catch(error=>{
            console.log(error)
        })

    },[])
    console.log(isStory)
    return(
        <div className="stories">
            <div className="story">
                    <div className="profile-photo">
                        <img src='' alt="no" />
                    </div>
                    <p className="name">Your Story</p>
                </div> 
            {!isload ? 
             isStory.map(item=>(
                <div className="story" style={{backgroundImage:  `url(http://127.0.0.1:8000${item.story_image})`}}>
                    <div className="profile-photo">
                        <img src='' alt="no_image" />
                    </div>
                    <p className="name">{item.story_creator.username}</p>
                </div> 
             ))
                 : <h1>asd</h1>}
                {/* <div className="story">
                    <div className="profile-photo">
                        <img src={rsa} alt="" />
                    </div>
                    <p className="name">Your Story</p>
                </div> */}
                {/* <div className="story">
                    <div className="profile-photo">
                        <img src={rsa} alt="" />
                    </div>
                    <p className="name">Winnie Hale</p>
                </div>
                <div className="story">
                    <div className="profile-photo">
                        <img src={rsa} alt="" />
                    </div>
                    <p className="name">Jane Doe</p>
                </div>
                <div className="story">
                    <div className="profile-photo">
                        <img src={rsa} alt="" />
                    </div>
                    <p className="name">Lilla James</p>
                </div>
                <div className="story">
                    <div className="profile-photo">
                        <img src={rsa} alt="" />
                    </div>
                    <p className="name">Jane Doe</p>
                </div>
                <div className="story">
                    <div className="profile-photo">
                        <img src={rsa} alt="" />
                    </div>
                    <p className="name">Jane Doe</p>
                </div> */}
            </div>
    )
}