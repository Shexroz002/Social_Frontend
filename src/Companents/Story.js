import StorySee from './StorySee';
import MyStory from './MyStory';
import './style.css'
import axios from "axios";
import { useState , useEffect } from "react";


export default function Story(){
    const[isshow,setshow] = useState(false);
    const[isimage,setimage] = useState();
    const [isStory,setStory] = useState([])
    const [isload,setload] = useState(false)
    const [ismyStory,setmyStory] = useState(false)
    const [isSeen_user,setSeenUser] = useState([]);
    const [ismystory,setmystory] = useState();
    const user_id = localStorage.getItem('id');
    const [isLoad,setLoad] = useState(false);

    useEffect(()=>{
        axios.get(`https://mysocial.pythonanywhere.com/feeds/api/story/seen/personal/${user_id}`,
        {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
        )
        .then(data=>{
            setmystory(data.data)
            setSeenUser(data.data.seen_user)
            setLoad((prev)=>!prev)
            console.log('personal',data.data)
        })
    },[user_id])


    useEffect(()=>{
        axios.get('https://mysocial.pythonanywhere.com/feeds/api/story',{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            setStory(data.data)
            setload((prev)=>!prev)
        })
        .catch(error=>{
            console.log(error)
        })

    },[])
    
       
    
    
    function showStory(){
        setshow(prev=>!prev)
       
    }
    function showMyStory(){
        setmyStory(prev=>!prev)
       
    }
    function seenStory(id){
        axios.get(`https://mysocial.pythonanywhere.com/feeds/api/story/seen/${id}`,
        {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
        )
        .then(data=>console.log(data.status))
        .catch(error=>console.log(error))
       
    }
    
    return(
        <>
         <div className="stories">
         <div className="story" onClick={()=>{showMyStory()}}>
                    <div className="profile-photo">
                        <img src='' alt="no" />
                    </div>
                    <p className="name">Your Story</p>
                </div> 
           
        
            {isload ? 
             isStory.map(item=>(


                <div onClick={()=>{showStory();seenStory(item.id);setimage(prev=>prev =item.story_image )}} className="story" style={{backgroundImage:  `url(https://mysocial.pythonanywhere.com/${item.story_image})`}}>
                    <div className="profile-photo">
                        <img src={item.story_creator.image[item.story_creator.image.length-1].photo} alt="no_image" />
                    </div>
                    <p className="name" style={{fontSize:'10px'}}>{item.story_creator.username}</p>
                </div> 
             ))
                 : <h1>asd</h1>}
            {isshow ? <StorySee showStorys={showStory} image ={isimage} /> : ''}
            {ismyStory ? <MyStory showMyStorys={showMyStory} isSeen_user ={isSeen_user}  ismystory={ismystory} isLoad={isLoad}  /> : ''}
            
            </div></>
    )
}