import './css/createstory.css'
import { useState ,useEffect  } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss';
import { Link } from 'react-router-dom';
export default function UpdateProfile(){
    const [isinfo,setinfo]  = useState([]);
    const [isload,setload]  = useState(false);
    const [isFile,setFile]  = useState();
    const [isLastName,setLastName]  = useState('');
    const [isFirstName,setFirstName]  = useState('');
    const [isUsername,setUsername]  = useState('');

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/users/api/profile/update/${localStorage.getItem('id')}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            if(data.status === 200){
                setinfo(data.data.user);
                setload(true)
            }
            
        })
        .catch(error=>{
            console.log(error)
        })
       
    }, []);

    function GetInfo(){
        let getData = new FormData();
        getData.append('photo',isFile);
        getData.append('last_name',isLastName);
        getData.append('username',isUsername);
        getData.append('first_name',isFirstName);
        axios.put(`http://127.0.0.1:8000/users/api/profile/update/${localStorage.getItem('id')}`,
        getData,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            console.log(data)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been updated',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(error=>{
            console.log(error)
            if(error.response.status === 400){
                const photo_error = document.querySelector('#photo_error');
                photo_error.innerHTML = error.response.data.photo[0]
            }
           
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
        {!isload ?<><Link to={`/feed/`}  ><i className="fas fa-arrow-left"></i></Link> <h1>Sa</h1></> : 
        <div className="newcontainer">
            <Link to={`/feed/`}  ><i className="fas fa-arrow-left"></i></Link>
		<h3 style={{textAlign:'center',fontSize:'5vh',position:'relative',top:'-15px'}}>Update Profile</h3>
        <span id='photo_error' style={{fontSize:'2.2vh',textAlign:'center',color:'red'}}></span><br/>
		<input onChange={FileGet} type="file" id="file" accept="image/*" hidden />
		<div className="img-area" data-img="">
			<i className='bx bxs-cloud-upload icon'></i>
			<h3>Upload Image</h3>
			<p>Image size must be less than <span>2MB</span></p>
		</div>
        <div className="card-button">
          <button onClick={ClikFile} className="select-image">Select Image</button>
        </div>
        {/* <button onClick={ClikFile} className="select-image">Select Image</button><br/> */}
        <input defaultValue={isinfo.username || ''}  onChange={(e)=>setUsername(e.target.value)}  type="text" placeholder="Enter username" className="newcontainer__input"  style={{margin:'8px auto',height:'8vh'}}/><br/>
        <input defaultValue={isinfo.first_name || ''}  onChange={(e)=>setFirstName(e.target.value)}  type="text" placeholder="Enter first name" className="newcontainer__input" style={{margin:'8px  auto',height:'8vh'}} /><br/>
        <input  defaultValue={isinfo.last_name || ''}  onChange={(e)=>setLastName(e.target.value)}  type="text" placeholder="Enter last name" className="newcontainer__input" style={{margin:'8px  auto',height:'8vh'}} />
        <button onClick={GetInfo} className="select-image">Update</button>
	</div>
        
        }
        </>
    )
}