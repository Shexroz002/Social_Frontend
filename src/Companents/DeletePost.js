/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useEffect } from 'react';
import Swal from 'sweetalert2';
import '../Companents/css/profile.css';
import axios from 'axios';
export default function DeletePost(props){
    const {showdelete,id} = props;
    function deletepost(){
        axios.delete(`http://127.0.0.1:8000/feeds/api/post/${id}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            console.log(data)
        })
        .catch(error=>{
            console.log(error)
            if(error.response.status === 404){
                const post = document.getElementById(id);
                post.remove();
                showdelete();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your post has been deleted',
                    showConfirmButton: false,
                    timer: 2500
                  })
                  
            }
        })
    }
    
    return(
        <div  className="popup_box">
      <i className="fas fa-exclamation"></i>
      <h1>Your account will be deleted Permanently!</h1>
      <label>Are you sure to proceed?</label>
      <div className="btns">
        <a  onClick={()=>{showdelete()}}  className="btn1">Cancel Process</a>
        <a   onClick={()=>{deletepost()}} className="btn2">Delete Account</a>
      </div>
    </div>
    )
}