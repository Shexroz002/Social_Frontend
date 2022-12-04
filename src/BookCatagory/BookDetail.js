import './bookdetail.css';
import sha from './arrival_1.jpg';
import axios from 'axios';
import { useEffect,useState } from 'react';
export default function BookDetail(){



    const [isSelcect ,allSelect] = useState([]);
    const [isPosts,setPosts]=useState([]);
    const [isPost2,setPost2]=useState([]);
    const [isType,setType]=useState('all');
    const [isorder,setorder]=useState('all');
    function shex(type,order){
        console.log(type,order)
        if(type === 'all'){
            if(order === 'all'){
                setPost2([...isPosts])
            }
            if(order === 'like'){
                setPost2([...isPosts].sort((a, b) => b.like.length - a.like.length))
            }
            if(order === 'comment'){
                setPost2([...isPosts].sort((a, b) => b.comment_count - a.comment_count))
            }
            
        }else{
            const newfilter = isPosts.filter(
                item=>{
                    return(
                       item.post_type.book_type === type
                    )
                }
               )
               if(order === 'all'){
                setPost2([...newfilter])
            }
            if(order === 'like'){
                setPost2([...newfilter].sort((a, b) => b.like.length - a.like.length))
            }
            if(order === 'comment'){
                setPost2([...newfilter].sort((a, b) => a.comment_count - b.comment_count))
            }
               console.log(type,'shex')
            } 
        }
        
        function book_filter(info){
            console.log(info,'ma')
            if(isPosts.length){
               const newfilter = isPosts.filter(
                item=>{
                    return(
                        item.post_name.toLowerCase().includes(info.toLowerCase())
                    )
                }
               )
               setPost2([...newfilter])
            }
            else{
                setPost2([...isPosts])
            }
            
          }
    
    useEffect(()=>{
        axios.get('https://mysocial.pythonanywhere.com/feeds/api/book/type',
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{allSelect(data.data)})
        .catch(error=>{console.log(error)})
    },[])
    useEffect(()=>{
        axios.get('https://mysocial.pythonanywhere.com/feeds/api/post',{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            console.log(data,'Feed')
            setPosts(data.data);
            setPost2(data.data);
            
        })
        .catch(error=>{
            console.log(error)
        })

    },[])
 

    return(
        <>
  
  <nav className="nav">
  <div className="wrapperbook containerbook">
    <h1 style={{textAlign: 'center'}}>All Book Detail</h1>
  </div>
</nav>


<div className="section products">
  <div className="products-layout container">

      </div>
    <div className="col-3-of-4">
      <form action="">
        <div className="item">
           
          <label for="sort-by">Sort By</label>
           <select onChange={(e)=>{setType(e.target.value);shex(e.target.value,isorder);console.log(e.target.value)}} name="sort-by" id="sort-by">
           <option value="all" selected="selected">all</option>
          {isSelcect.length ? isSelcect.map((item)=>(
           <>
          <option value={item.book_type} >{item.book_type}</option>
          </>
          ))
          
          :''}</select>
            
        </div>
        <div className="item">
          <label for="order-by">Order</label>
          <select onChange={(e)=>{setorder(e.target.value);shex(isType,e.target.value)}} name="order-by" id="sort-by">
            <option value="all" selected="selected">All</option>
            <option value="like">Like</option>
            <option value="comment">Comments</option>
          </select>
        </div>
        <input onChange={(e)=>{book_filter(e.target.value)}} id="searchproduct" placeholder="Enter Book name"
           type="search" style={{borderRadius: '0.5em',border: '1em,solid,white',fontSize: '1.5rem',color: 'grey',fontFamily: 'Open Sans',position:'relative',left:'1px',top:'30px'}} />
      </form>

      <div className="product-layout">
{isPost2.length ?

isPost2.map((item)=>(
    <div className="product">
    <div className="img-containerbook">
      <img src={`https://mysocial.pythonanywhere.com/${item.post_image}`} className='productimg' alt="" />
    </div>
    <div className="bottom">
      <a href="productDetails.html">{item.post_type.book_type}</a>
      <div className="price">
        <span>like {item.like.length}va  comment {item.comment_count}</span>
      </div>
    </div>
  </div>
   ))
       
       : '' }
        
     
        
       
        
        

      </div>

    </div>
  </div>

</>
    )
}