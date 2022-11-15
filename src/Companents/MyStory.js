import './css/storysee.css'
import { useState,useEffect } from 'react';
import rsa from "./profile-14.jpg"
import UsersSeenMyStory from './UsersSeenMySrory'
export default function MyStory(props){
    const {showMyStorys,ismystory,isSeen_user,isLoad} = props;
    const modal = document.getElementById('modalsection');
    const[iscount ,setcount] = useState(30);
    setTimeout(()=>{
        if(iscount>0){
            setcount(prev=>prev-1)
            console.log('ss')
        }
    },1000)
    setInterval(()=>{
        modal.classList.add('modal__closeed');
    },30000)
    
   
    return(
<>
<section className="modalsection" id='modalsection'>
            
           { !isLoad ?
            <div className="modal__container show-modal" id="modal-container">
                <div className="modal__content">
                    <div className="modal__close close-modal" title="Close">
                        <i  className='bx bx-x'></i>
                    </div>

                    <img src={rsa} alt="noimag3e" className="modal__img"/>

                    

                    
                </div>
            </div> :
            
            <div className="modal__container show-modal" id="modal-container">
            <div className="modal__content">
                <div className="modal__close close-modal" title="Close">
                    <i onClick={()=>{showMyStorys()}} className='bx bx-x'></i>
                </div>

                <img src={ismystory.story_image} alt="noimage" className="modal__img"/>

                
         <button className="modal__button modal__button-width">
                    {iscount}
                </button>

                <div className="users-list">
                    {isSeen_user.length ? 
                    isSeen_user.map(item=>(
                    <UsersSeenMyStory userimage={item.image[item.image.length-1].photo} username={item.username} id={item.id} />

                    ))
                    :<h1>No Views</h1>
                
                
                }
          
                  </div>
            </div>
        </div> 
            
            }
        </section>



</>
    )
}