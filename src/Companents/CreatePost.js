import './css/createstory.css'
import { useState  } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
// CommonJS
import { Link } from 'react-router-dom';
export default function CreatePost(){
    // const Swal = require('sweetalert2');
    const [isFile,setFile]  = useState()
    const [isDescribe,setDescribe]  = useState('')

    function GetInfo(){
        let getData = new FormData();
        getData.append('post_image',isFile);
        getData.append('post_title',isDescribe);
        axios.post('http://127.0.0.1:8000/feeds/api/post',
        getData,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            console.log(data)
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
        })
        .catch(error=>{
            console.log(error)
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
      
        <div className="newcontainer">
        <Link to={`/feed/`} className="back-icon" ><i className="fas fa-arrow-left"></i></Link>
		<h3 style={{textAlign:'center'}}>Create Post</h3>
        <input onChange={(e)=>setDescribe(e.target.value)}  type="text" placeholder="describe this story" className="newcontainer__input" />
		<input onChange={FileGet} type="file" id="file" accept="image/*" hidden />
		<div className="img-area" data-img="">
			<i className='bx bxs-cloud-upload icon'></i>
			<h3>Upload Image</h3>
			<p>Image size must be less than <span>2MB</span></p>
		</div>
		<button onClick={ClikFile} className="select-image">Select Image</button><br/>
		<button onClick={GetInfo} className="select-image">Create Post</button>
	</div>
        </>
        
    )
}