export default function UsersSeenMyStory(props){
    const {username,userimage,id} = props;
    return(
        <>
        <a href={id}>
                          <div class="content">
                          <img src={userimage} alt=""/>
                          <div class="details">
                              <span>{username}</span>
                              
                          </div>
                          </div>
                          <div class="status-dot"><i class="fas fa-circle"></i></div>
                      </a>
        </>
    )
}