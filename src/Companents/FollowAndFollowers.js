import axios from "axios";
export default function FollowAndFollowers(props){
    const {username,user_image,id}= props;
    let user_list = localStorage.getItem('followers').split(',');
    console.log(user_list.some((item)=>(item===id.toString())))
    function followers(element) {
        axios.post(`http://127.0.0.1:8000/users/api/followers/${id}`,
        {'sa':8},
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .then(data=>{
        if(data.status === 201){
          element.innerHTML='Following';
          element.style.background = "red";
        }
      })
      .catch(error=>{
        if(error.response.status === 404){
          element.innerHTML='Follow';
          element.style.background = "blue";
        }
      })
      }
    return(
        <>
        <div className="profile-card">
                <div className="profile-content">
                    <div className="profile-image">
                        <img className='profile-imagess' src={user_image ? user_image :''} alt="first user"/>
                    </div>
                    <div className="desc">
                        <h2>{username}</h2>
                        {/* <p>Lorem ipsum dolor sit amet adipisicing elit. </p> */}
                    </div>
                    <div className="btn-div">
                        <button onClick={(e)=>{followers(e.target)}} className="buttons" style={
                            {background:user_list.some((item)=>(item===id.toString())) ? 'blue': 'red'}}>
                            {user_list.some((item)=>(item===id.toString())) ? 'Follow' : 'Following'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}