import './style.css'
import { useState ,useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Right(){
    const[isRequest,setRequest] = useState([])
    useEffect(()=>{
        axios.get('https://mysocial.pythonanywhere.com/users/api/suggest',
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
        )
        .then(data=>{setRequest(data.data);console.log(data.data)})
        .catch(error=>console.log(error),'Error')

    },[])
    
    function delete_suggest_friend(post_id,user_id,type,username) {
        let user_list = localStorage.getItem('following').split(',');
        if (type ==='accept'){
             axios.post(`https://mysocial.pythonanywhere.com/users/api/followers/${user_id}`,
          {'sa':8},
          { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
          if(data.status === 201){
            user_list.push(user_id)
            localStorage.setItem('following',user_list)
            toast.success(`You acceoted ${username} to your friends lists!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            setRequest(prev=>{
                let  last = prev.filter(item=>item.id !== post_id)
                  return last
              })
          }
        })
        .catch(error=>{
          if(error.response.status === 404){
            user_list.pop(user_id)
            localStorage.setItem('following',user_list)
            toast.info(`You ignored request ${username} for friend!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            
            setRequest(prev=>{
                let  last = prev.filter(item=>item.id !== post_id)
                  
                  return last
              })
          }
        })
        }else{
            setRequest(prev=>{
                let last = prev.filter(item=>item.id !== post_id)
            return last
        })
        toast.error(`You ignored request ${username} for friend!`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
         
        }
    return(
        <div className="right">
        
        <div className="friend-requests">
            <h4>Maybe you know these people</h4>
            { isRequest.length ?
            isRequest.map(item=>(
                <div className="request" >
                    <div className="info">
                            <div className="profile-photo">
                            <img src={item.image[item.image.length-1].photo} alt="not found"/>
                        </div>
                        <div>
                            <h5>{item.username}</h5>
                            {/* <p className="text-muted">
                            {!new Date(item.data).getHours() >=9 ?
                            `0${ new Date(item.data).getHours()}`
                            :
                            `${ new Date(item.data).getHours()}`}
                            :
                            {!new Date(item.data).getMinutes()>9 ?
                            `0${ new Date(item.data).getMinutes()}`
                            :
                            `${ new Date(item.data).getMinutes()}`}

                            </p> */}
                        </div>
                    </div>
                    <div className="action">
                        <button onClick={()=>{delete_suggest_friend(item.id,item.id,'accept',item.username)}}  className="btn btn-primary">
                            Accept
                        </button>
                        <ToastContainer />
                        <button onClick={()=>{delete_suggest_friend(item.id,item.id,'ignore',item.username)}} className="btn">
                            Ignore
                        </button>
                    </div>
            </div>
            ))
            
            : <div className="request">
            <div className="info">
                <div>
                    <h5>No people you know were found</h5>

                </div>
            </div>
            
        </div>}
           

            {/* <div className="request">
                <div className="info">
                    <div className="profile-photo">
                        <img src="./images/profile-14.jpg" alt=""/>
                    </div>
                    <div>
                        <h5>Hajia Bintu</h5>
                        <p className="text-muted">
                            8 mutual friends
                        </p>
                    </div>
                </div>
                <div className="action">
                    <button className="btn btn-primary">
                        Accept
                    </button>
                    <button className="btn">
                        Decline
                    </button>
                </div>
            </div> */}

            {/* <div className="request">
                <div className="info">
                    <div className="profile-photo">
                        <img src="./images/profile-15.jpg" alt=""/>
                    </div>
                    <div>
                        <h5>Hajia Bintu</h5>
                        <p className="text-muted">
                            8 mutual friends
                        </p>
                    </div>
                </div>
                <div className="action">
                    <button className="btn btn-primary">
                        Accept
                    </button>
                    <button className="btn">
                        Decline
                    </button>
                </div>
            </div> */}
        </div>
    </div>
    )
}