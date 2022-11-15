/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import { useState ,useEffect } from 'react';
import './css/profileimage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { Link,useNavigate  } from 'react-router-dom';
export default function ProfileImage(){
    let navigate = useNavigate();
    function main_page(){
        return navigate('/feed/')
    }
   const value = useParams();
    
    const[isallimage,setallimage] = useState([]);
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/users/api/user/profile/image/${value.id}`,{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            console.log(data.data)
            setallimage(data.data)
           
        })
        .catch(error=>{
            console.log(error)
        })},[])
        let i = 0; // current slide
        let j = isallimage.length; // total slides
    function next(){
        document.getElementById("content" + (i+1)).classList.remove("active");
        document.getElementById("item" + (i+1)).classList.remove("active");
        document.getElementById("item" + (i+1)).classList.add("items");
        i = (j + i + 1) % j;
        document.getElementById("content" + (i+1)).classList.add("active");
        document.getElementById("item" + (i+1)).classList.add("active");
        document.getElementById("item" + (i+1)).classList.remove("items");
        indicator(i+1);
    }
    
    function prev(){
        document.getElementById("content" + (i+1)).classList.remove("active");
        document.getElementById("item" + (i+1)).classList.remove("active");
        document.getElementById("item" + (i+1)).classList.add("items");
        i = (j + i - 1) % j;
        document.getElementById("content" + (i+1)).classList.add("active");
        document.getElementById("item" + (i+1)).classList.add("active");
        document.getElementById("item" + (i+1)).classList.remove("items");
        indicator(i+1);
    }
    
    function indicator(num){
        const dots = document.querySelectorAll(".dot-container button");
        dots.forEach(function(dot){
            dot.style.backgroundColor = "transparent";
        });
        document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#8052ec";
    }
    
    // function dot(index){
    //     const images = document.querySelectorAll(".imgclass");
    //     const dates = document.querySelectorAll(".items");
    //     const ima = document.querySelector('.active');
    //     console.log(ima)
    //     images.forEach(function(image){
    //         image.classList.remove("active");
    //     });
    //     // dates.forEach(function(date){
    //     //     date.classList.remove("active");
            
    //     // });
    //     document.getElementById("content" + index).classList.add("active");
    //     document.getElementById("item" + index).classList.add("active");
    //     document.getElementById("item" + index).classList.remove("items");
    //     i = index - 1;
    //     indicator(index);
    // }
    function delete_image(){
        const images = document.querySelectorAll('.active')[1].alt;
        axios.delete(`http://127.0.0.1:8000/users/api/user/profile/image/delete/${+images}`,{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            console.log(data.data)
            toast.info(`You ignored request ${data.data.data} for friend!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        )
        .catch(error=>{toast.error(`Photo have deleted from your profile.`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        setallimage(prev=>{
                let last = prev.filter(item=>item.id !== +images)
            return last
        });
        console.log(error.responce)
            
        })
    }
    return(
        <>
        <ToastContainer/>
        <div className='allimage'>
        
        <div className="containerprofile">
        
        {localStorage.getItem('id')!==value.id ? '': 
       <> <button  onClick={()=>{delete_image()}} style={{backgroundColor:'red',textAlign:'center'}} className='btn btn-primary'><i className="bi bi-trash" ></i>Image</button>
       <Link to={`/profile/${value.id}`}  > <button onClick={()=>{main_page()}} style={{position:'relative',left:'10%',backgroundColor:'green',textAlign:'center'}} className='btn btn-primary'>Exit</button></Link></>}
        
       
         <>
         <div className="image-container"><Link to={`/feed/`}  ><i className="fas fa-arrow-left"></i></Link>
        {isallimage.length ? 
        isallimage.map((item,index)=>(
            <><p className={index === 0 ? 'active' : 'items'} id={`item${index+1}`}>
            { `${new Date(item.date).getDay()}.${new Date(item.date).getMonth()}.${new Date(item.date).getFullYear()}  ${new Date(item.date).getHours()}`}
         : {new Date(item.date).getMinutes()>10 ? new Date(item.date).getMinutes() 
         : `0${new Date(item.date).getMinutes()}`} created profile image</p>
            <img className={index === 0 ?'imgclass active' :'imgclass'} src={item.photo} id={`content${index+1}`} alt={`${item.id}`} /></>
            
            )) : 'no'}
        </div>
        <div className="dot-container">
        {/* {isallimage.length ? 
        isallimage.map((item,index)=>(
            <button onClick={()=>{dot(index+1);console.log(index)}}></button>
            )) : ''} */}
        </div>
        </>   
        
        
        
        
       
       
        <button id="prev" onClick={prev}> &lt; </button>
        <button id="next" onClick={next}> &gt; </button>
    </div>
        
        </div></>
    )
}