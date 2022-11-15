import axios from "axios";
export default function FollowAndFollowers(props){
    const {username,user_image,id}= props;
    const user_id = localStorage.getItem('id')
    let user_list = localStorage.getItem('followers').split(',');
    console.log(user_list.some((item)=>(item===id.toString())))
    function followers(element) {
      let user_list = localStorage.getItem('followers').split(',');
        axios.post(`http://127.0.0.1:8000/users/api/followers/${id}`,
        {'sa':8},
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .then(data=>{
        if(data.status === 201){
          element.innerHTML='Following';
          element.style.background = "red";
          user_list.push(id)
          localStorage.setItem('followers',user_list)
        }
      })
      .catch(error=>{
        if(error.response.status === 404){
          element.innerHTML='Follow';
          element.style.background = "blue";
          console.log(id)
          user_list.pop(id)
          localStorage.setItem('followers',user_list)
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
                            {background:user_list.some((item)=>(item.toString()===id.toString())) ? 'red': 'blue'}}>
                            {user_list.some((item)=>(item.toString()===id.toString())) ? 'Following' : 'Follow'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}