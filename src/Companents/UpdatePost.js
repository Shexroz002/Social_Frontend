import './css/createstory.css'
import { useState ,useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { Link } from 'react-router-dom';
export default function UpdatePost(){
    let value =useParams();
    const [isinfo,setinfo]  = useState();
    const [isload,setload] = useState(false);
    const [isFile,setFile]  = useState();
    const [isDescribe,setDescribe]  = useState('');
    const [isError,setError]  = useState('')
    useEffect(() => {
        axios.get(`https://mysocial.pythonanywhere.com/feeds/api/post/${value.id}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            if(data.status === 200){
                setinfo(data.data);
                setload(prev=>!prev)
            }
            
        })
        .catch(error=>{
            console.log(error)
        })
       
    }, [value.id]);



    function GetInfo(){
       
           let getData = new FormData();
            if(isFile){
                getData.append('post_image',isFile);
            }
            getData.append('post_title',isDescribe);
            axios.put(`https://mysocial.pythonanywhere.com/feeds/api/post/${value.id}`,
            getData,
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            .then(data=>{
                console.log(data)
                setError('')
                Swal.fire(
                    'Successfully Update!',
                    'You clicked the button!',
                    'success'
                )
                
            })
            .catch(error=>{
                setError(error.response.data.error.post_image)
            }) 
            
   
        
    }
    function ClikFile () {
        const inputFile = document.querySelector('#file');
        inputFile.click();
    }
    
    const FileGet =(event)=> {
        setFile(event.target.files[0])
        const imgArea = document.querySelector('.img-area');
        const image = event.target.files[0];
        if(image.size < 2000000) {
            const reader = new FileReader();
            reader.onload = ()=> {
                const allImg = imgArea.querySelectorAll('img');
                allImg.forEach(item=> item.remove());
                const imgUrl = reader.result;
                const img = document.createElement('img');
                img.src = imgUrl;
                imgArea.appendChild(img);
                imgArea.classList.add('active');
                imgArea.dataset.img = image.name;
            }
            reader.readAsDataURL(image);
        } else {
            alert("Image size more than 2MB");
        }
    }
    return(
        <>
        {isload ? 
        <div className="newcontainer">
            <Link to={`/feed/`}  ><i className="fas fa-arrow-left"></i></Link>
		<h3 style={{textAlign:'center'}}>Update Post</h3>
        <input onChange={(e)=>setDescribe(e.target.value)} defaultValue={isinfo.post_title}  type="text" placeholder="describe this story" className="newcontainer__input" />
		<input onChange={FileGet} type="file" id="file" accept="image/*" hidden />
        <p className='imageerror' style={{color:'red'}}>{isError}</p>
		<div className="img-area" data-img="">
            <img src={isinfo.post_image} alt='NoImage'/>
			<i className='bx bxs-cloud-upload icon'></i>
			<h3>Upload Image</h3>
			<p>Image size must be less than <span>2MB</span></p>
		</div>
		<button onClick={ClikFile} className="select-image">Select Image</button><br/>
		<button onClick={GetInfo} className="select-image">Update Post</button>
	</div>
    : ''}
</>

        
    )
}