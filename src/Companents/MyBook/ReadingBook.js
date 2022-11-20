import '../css/mybook.css';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ReadingBook(){
    const [isReading,setReading]=useState([]);
    const [isRead,setRead]=useState([]);
    const [isLoad,setLoad]=useState(false);
    const [isoff,setoff]=useState(false);

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/feeds/api/reading/book',{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            console.log(data,'Feed')
            setLoad(prev=>!prev)
            setReading(data.data)
        })
        .catch(error=>{
            console.log(error)
        })

    },[])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/feeds/api/read/book',{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            setRead(data.data)
        })
        .catch(error=>{
            console.log(error)
        })

    },[])
    function finish_book(post_id){

        axios.post(`http://127.0.0.1:8000/feeds/api/readed/book/${post_id}`,{'id':1},{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            console.log(data)
            setRead((prev)=>[...prev,data.data])
            setReading(prev=>{
            let last = prev.filter(item=>item.post.id !== post_id);
            toast.success('This book had finished successfully!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        return last
            
        })
       

       
    }) 
    .catch(error=>{
            console.log(error)
        })
    }
    function delete_book(post_id){

        axios.delete(`http://127.0.0.1:8000/feeds/api/readed/book/${post_id}`,{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            console.log(data)
            
            
        })
        .catch(error=>{
            setReading(prev=>{
                let last = prev.filter(item=>item.post.id !== post_id);
                toast.error('This post had deleted!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            return last
        })

       
    })
    }
    function delete_book_read(post_id){

        axios.delete(`http://127.0.0.1:8000/feeds/api/readed/book/${post_id}`,{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            console.log(data)
            
            
        })
        .catch(error=>{
            setRead(prev=>{
                let last = prev.filter(item=>item.post.id !== post_id);
                toast.error('This post had deleted!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            return last
        })

       
    })
    }



    return(
        <div className = "wrapperbook">
        <div className = "containerbook">
            <Link to='/feed/'><li className="filter-btn active" data-project="web">Exit</li></Link>
            <div className = "heading-title">
                <h1>MyBooks</h1>
               
            </div>
            <div className="filter-menu">
                <li className={`filter-btn ${isoff ? '' :'active'}`} onClick={()=>{setoff(false)}}  data-project="all">Reading...</li>
                <li className={`filter-btn ${isoff ? 'active' :''}`} onClick={()=>{setoff(true)}} data-project="web">Read</li>
              </div>
            <div className = "itembook-grid">
        {isLoad ?
        <>
        {isoff ?  <>
         
            {isRead.map((item)=>(
               <div key={item.id} className = "itembook" >
                 <div className = "itembook-img" >
                        <img className="itembookimg" src = {`http://127.0.0.1:8000${item.post.post_image}`} alt = {item.post.post_title}/>
                    </div>

                    <div className = "itembook-details">
                        
                        <li className="filter-btn active" style={{backgroundColor:'green'}} data-project="web" ><i style={{fontSize:'15px'}} class="bi bi-check-circle-fill"></i></li>
                        <i style={{color:'red'}} class="uil uil-trash-alt" onClick={()=>{delete_book_read(item.post.id)}}></i>
                        
                        {/* <!-- <p className = "name">clothing name here</p> --> */}
                    </div>
                </div>
            ))} </> :
            <>
         
            {isReading.map((item)=>(
               <div key={item.id} className = "itembook" >
                 <div className = "itembook-img" >
                        <img className="itembookimg" src = {`http://127.0.0.1:8000${item.post.post_image}`} alt = {item.post.post_title}/>
                    </div>

                    <div className = "itembook-details">
                    
                        <li className="filter-btn active" data-project="web" onClick={()=>{finish_book(item.post.id)}}>Finish</li>
                        <i style={{color:'red'}} class="uil uil-trash-alt" onClick={()=>{delete_book(item.post.id)}}></i>
                        <p style={{color:'green'}} className = "price">Reading...</p>
                        {/* <!-- <p className = "name">clothing name here</p> --> */}
                    </div>
                </div>
            ))} </>
             
             
             }
       
                   
               
               
               </>
               
               : ''}
                

                <ToastContainer />

            </div>
        </div>
    </div>
    )
}