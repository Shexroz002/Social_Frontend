
import { Link } from "react-router-dom";
function User(props){
    const {id,image,username} = props;
    return(
            <>
        <Link to={`/users/chat/${id}`} id='link' >
          <div className="content">
          <img style={{height:'50px'}} src={image[image.length-1].photo} alt=""/>
          <div className="details">
              <span>{username}</span>
              <p>Resently</p>
          </div>
          </div>
          <div className="status-dot"><i className="fas fa-circle"></i></div>
      </Link>
     </>
      
    )
}
export default User;