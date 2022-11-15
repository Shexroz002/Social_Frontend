
import './style.css';
import { useEffect,useState } from "react";
import axios from "axios";
export default function Notification(){
    const [isNotifications, setNotifications] = useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/feeds/api/notifications',
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
        )
        .then(data=>{setNotifications(data.data)})
        .catch(error=>console.log(error),'Error')

    },[])
    console.log(isNotifications[isNotifications.length-1],'shex')
    return(
        <div className="notification-popup">
                    {/* <div className="request">
                        
                       
                    </div> */}
        
            {isNotifications.length ?
            isNotifications.map(item=>(
                item.follow_or_like ===0 ?
                <div>
                <div className="profile-photo">
                    <img src={item.following_user.image[item.following_user.image.length-1].photo} alt="not found" />
                </div>
                <div className="notification-body">
                    <b>{item.following_user.username}</b> liked your post
                     <small className="text-muted">
                      {!new Date(item.date).getHours()>9 ?
                      `0${ new Date(item.date).getHours()}`
                      :
                      `${ new Date(item.date).getHours()}`}
                      :
                      {!new Date(item.date).getMinutes()>9 ?
                      `0${ new Date(item.date).getMinutes()}`
                      :
                      `${ new Date(item.date).getMinutes()}`}

                      </small>
                </div>
                <div className="profile-photo">
                    <img style={{borderRadius:'1%'}}  src={item.post_like.post_image} alt="not found" />
                </div>
            </div>
                :
                <div>
                <div className="profile-photo">
                    <img src={item.following_user.image[0].photo} alt=" not found" />
                </div>
                <div className="notification-body">
                    <b>{item.following_user.username}</b> has started following you
                    <small className="text-muted">
                      {!new Date(item.date).getHours() >=9 ?
                      `0${ new Date(item.date).getHours()}`
                      :
                      `${ new Date(item.date).getHours()}`}
                      :
                      {!new Date(item.date).getMinutes()>9 ?
                      `0${ new Date(item.date).getMinutes()}`
                      :
                      `${ new Date(item.date).getMinutes()}`}

                      </small>
                </div>
            </div>
            ))
            
            :
            <div>
                <div className="notification-body">
                    <b>Notification was not found!</b>
                    
                </div>
            </div>
            }

{/* 
            <div>
                <div className="profile-photo">
                    <img src={rsa} alt="" />
                </div>
                <div className="notification-body">
                    <b>Keke Benjamin</b> accepted your friend request<div className="profile-photo">
                    <img src={rsa} alt="" />
                </div>
                    <small className="text-muted">2 DAYS AGO</small>
                </div>
            </div>
                     <div>
                        <div className="profile-photo">
                            <img src={rsa} alt="" />
                        </div>
                        <div className="notification-body">
                            <b>Keke Benjamin</b> accepted your friend request
                            <small className="text-muted">2 DAYS AGO</small>
                        </div>
                    </div> */}
                   {/* <div>
                        <div className="profile-photo">
                            <img src={rsa} alt="" />
                        </div>
                        <div className="notification-body">
                            <b>Keke Benjamin</b> accepted your friend request
                            <small className="text-muted">2 DAYS AGO</small>
                        </div>
                    </div>
                    <div>
                        <div className="profile-photo">
                            <img src={rsa} alt="" />
                        </div>
                        <div className="notification-body">
                            <b>Keke Benjamin</b> accepted your friend request
                            <small className="text-muted">2 DAYS AGO</small>
                        </div>
                    </div>
                    <div>
                        <div className="profile-photo">
                            <img src={rsa} alt=""/>
                        </div>
                        <div className="notification-body">
                            <b>Keke Benjamin</b> accepted your friend request
                            <small className="text-muted">2 DAYS AGO</small>
                        </div> 
                    </div>*/}
                </div>
    )
}