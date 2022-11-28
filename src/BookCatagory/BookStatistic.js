import './statistic.css';
import sha from './arrival_1.jpg';
import axios from 'axios';
import { useEffect,useState } from 'react';
export default function BookStatistic(){

function open_select(){
    const optionsContainer = document.querySelector(".options-container");
    optionsContainer.classList.toggle("active");
}


const [isSelcect ,allSelect] = useState([]);
const [isPosts,setPosts]=useState([]);
const [isPost2,setPost2]=useState([]);
const [isorder,setsortby]=useState('all');
const[isType,settype_select] = useState('all');
const [isshow_select,setshow_select]=useState(false);
const [isshow_select2,setshow_select2]=useState(false);
const [istype,setype]=useState([]);

function open_sortby(){
    setshow_select2(prev=>!prev)
}
useEffect(()=>{
    axios.get('http://127.0.0.1:8000/feeds/api/book/type',
    { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(data=>{setype(data.data)})
    .catch(error=>{console.log(error)})
},[])
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
    axios.get('http://127.0.0.1:8000/feeds/api/book/type',
    { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(data=>{allSelect(data.data)})
    .catch(error=>{console.log(error)})
},[])
useEffect(()=>{
    axios.get('http://127.0.0.1:8000/feeds/api/post',{
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
function selected_type(o){
    console.log('selected',o);
    const selected = document.querySelector(".selected");
    selected.innerHTML = o.id;
    setshow_select(prev=>!prev)
    settype_select(prev=>prev=selected.innerHTML)
    
}
function selected_type2(o){
    console.log('selected',o);
    const selected = document.querySelector("#bookid");
    selected.innerHTML = o.id;
    setshow_select2(prev=>!prev)
    setsortby(prev=>prev=selected.innerHTML)
    
}

    return(

<section class="productsbook">

<h1 class="title"> Book  <span>Statistic</span> <a href="/">Exit</a> </h1>
<div class="selectedbook">
<div class="input-group mb-3" style={{width: '200px', height: '40px'}}>
    <input onChange={(e)=>{book_filter(e.target.value)}} type="text" class="form-control" placeholder="enter book name" aria-label="Username" aria-describedby="basic-addon1"/>
  </div>
<div></div>
<div className="select-box">
			<div className={isshow_select ? "options-container active" :"options-container"}>
            <><div onChange={(e)=>{selected_type(e.target);shex(e.target.id,isorder)}} className="option">
				<input type="radio" className="radio" id='all' name="category" />
				<label for='all'>all</label>
			  </div></>
            {istype.length ? istype.map(item=>(
                <><div onChange={(e)=>{selected_type(e.target);shex(e.target.id,isorder)}} className="option">
				<input type="radio" className="radio" id={item.book_type} name="category" />
				<label for={item.book_type}>{item.book_type}</label>
			  </div></>
            )) : ''}
			  
			</div>
	
			<div onClick={()=>{setshow_select(prev=>!prev)}} className="selected">
			   Book Category
			</div>
		  </div>
  <div class="select-box">
    <div className={isshow_select2 ? "options-container active" :"options-container"} id='selectby'>
      <div onChange={(e)=>{selected_type2(e.target);shex(isType,e.target.id)}} class="option">
        <input
          type="radio"
          class="radio"
          id="comment"
          name="category"
        />
        <label for="comment">comment</label>
      </div>
      <div onChange={(e)=>{selected_type2(e.target);shex(isType,e.target.id)}} class="option">
        <input
          type="radio"
          class="radio"
          id="like"
          name="category"
        />
        <label for="like">Like</label>
      </div>


    </div>

    <div onClick={()=>{open_sortby()}} class="selected" id='bookid'>
    Sort By
    </div>
  </div>
  </div>
<div class="box-containerbook">
{isPost2.length ?

isPost2.map((item)=>(
    <div class="boxbook">
     
        <div class="image">
            <img className='productsbookimg' src={`http://127.0.0.1:8000/${item.post_image}`} alt=""/>
        </div>
        <div class="content">
            <h3 className='productsbookh3'>{item.post_name}</h3>
            <div class="price">$18.99</div>
           
        </div>
    </div>
   ))
       
       : '' }
    
    

</div>

</section>


    )
}