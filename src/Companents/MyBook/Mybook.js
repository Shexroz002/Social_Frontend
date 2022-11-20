import rsa from './profile-14.jpg';
import './css/searchimage.css'
export default function ImageSearch(props){
 const {data} = props
    return(
        <>
        <div class="containersh">
        <div class="image-containersh">
{data.map(item=>(
   <>
   <div class="image" data-title="cute">
         <img src={item.post_image} alt=""/>
         <p>{item.post_title}</p>
      </div></>
))}
      

      
   </div></div>


        </>
    )


}