import axios from 'axios';
import './css/commiteupdate.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
export default function CommiteUpdate(props){
    const{delete_comment}=props;
    const[ismessagea,setmessagea] = useState('');
const{istype,iscomment_id,comment,showmodal,update_comments,index}=props;

function comment_delete(){
    axios.delete(`http://127.0.0.1:8000/feeds/api/post/comments/delete/${iscomment_id}`,
    {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }
    
    )
    .catch(error=>{
        if(error.response.status === 404){
            delete_comment(iscomment_id);
                showmodal();
        }
        
    })
}
const get_data = (e)=>{
    setmessagea(e.target.value);
    
}

function comment_edit(){
    if(ismessagea){
        const data_send = new FormData();
        data_send.append("comment",ismessagea)
        axios.put(`http://127.0.0.1:8000/feeds/api/post/comments/delete/${iscomment_id}`,
        data_send,
        {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{console.log(data.data)
            update_comments(index,data.data)
            
        })
    }
    showmodal();
    
}

    return(
<div className="modalsh" id="show">
  <ToastContainer />
        <div className="modal-header">
            <button className="butts" id="hideIcon">
                <i className="fa fa-close"></i>
            </button>
        </div>
        <div className="modal-body">
           
            {istype === 'edit' ? <><h3 className="h3style">Edit your comment</h3><input onChange={get_data}  type="text" className='forminput' name="message" defaultValue={comment} placeholder="Type a message here..."  /></> :''}
            {istype === 'delete' ? <><h3 className="h3style">Are you going to delete this comment!</h3> 
            <p className="pstyle">"{comment}"</p></>:''}
            {/* <p>{istype}{iscomment_id}{comment}</p> */}
            {istype === 'edit' ?
            <>
            <button onClick={()=>{comment_edit();}} className="buttons" id="hideButton">Save</button>
            <button onClick={()=>{showmodal()}} className="buttona" id="hideButton">Cancel</button></>:''}
            {istype === 'delete' ?
            <>
            <button onClick={()=>{comment_delete()}} className="buttons" id="hideButton">Delete</button>
            <button onClick={()=>{showmodal()}} className="buttona" id="hideButton">Cancel</button></>:''}
        </div>
    </div>

        
    )
}