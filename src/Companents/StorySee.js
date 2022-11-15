import { useState } from 'react';
import './css/storysee.css'
import rsa from "./profile-14.jpg"
export default function StorySee(props){
    const{showStorys,image} = props;
    const[iscount ,setcount] = useState(30);
    const modal = document.getElementById('modalsection');
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
        <section className="modalall containerall" id='modalsection' >
            

            <div className="modal__container show-modal" id="modal-container">
                <div className="modal__content">
                    <div onClick={()=>{showStorys()}} className="modal__close close-modal" title="Close">
                        <i className='bx bx-x'></i>
                    </div>

                    <img src={image} alt="no_image" className="modal__img" />

                    {/* <h1 className="modal__title">Good Job!</h1> */}
                    {/* <p className="modal__description">Click the button to close{iscount}</p> */}

                    <button className="modal__button modal__button-width">
                    {iscount}
                    </button>

                    {/* <button className="modal__button-link close-modal">
                        Close
                    </button> */}
                </div>
            </div>
        </section>

    )
}