import Profile from './Profile'
import Notification from './Notification'
import './style.css'
export default function Left(props){
    const {openshow}=props;
    function notificationfunc(){
        const messageNotification = document.querySelector('#message-notification');
        const messages = document.querySelector('.messages');
        messages.style.boxShadow = '0 0 1rem var(--color-primary)';
        messageNotification.querySelector('.notification-count').style.display = 'none';
        setTimeout(() => {
            messages.style.boxShadow = 'none';
        }, 2000);
    }

    const changeActiveItem = () => {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.classList.remove('active');
        })
    };
    const MenuItemsFun =(e)=>{
        let item = e.target;
        if( ('menu-item' === item.classList[0])){
            changeActiveItem()
            item.classList.add('active');
            if(item.id !== 'notification'){
                document.querySelector('.notification-popup').style.display = 'none';
            }else{
                document.querySelector('.notification-popup').style.display = 'block';
                document.querySelector('#notification .notification-count').style.display = 'none';
            }
            if(item.id === 'theme'){
                openshow()
            }
        }
        
    }

    return(
        <div className="left" >
        <Profile/>

        <div className="sidebar">
            <p onClick={MenuItemsFun}  className="menu-item active">
                <span><i className="uil uil-home"></i></span><h3>Home</h3>
            </p>
            <p onClick={MenuItemsFun} className="menu-item">
                <span><i className="uil uil-compass"></i></span><h3>Explore</h3>
            </p>
            <p onClick={MenuItemsFun} className="menu-item" id="notification">
                <span><i className="uil uil-bell"><small className="notification-count">+9</small></i></span><h3>Notifications</h3>
            <Notification/>
            </p>
            <p onClick={MenuItemsFun} className="menu-item" id="message-notification">
                <span onClick={notificationfunc}><i className="uil uil-envelope-alt"><small className="notification-count">6</small></i></span><h3>Messages</h3>
            </p>
            <p onClick={MenuItemsFun} className="menu-item">
                <span><i className="uil uil-bookmark"></i></span><h3>Bookmarks</h3>
            </p>
            <p onClick={MenuItemsFun} className="menu-item">
                <span><i className="uil uil-chart-line"></i></span><h3>Analytics</h3>
            </p>
            <p onClick={MenuItemsFun} className="menu-item" id="theme">
                <span><i className="uil uil-palette"></i></span><h3>Theme</h3>
            </p>
            <p onClick={MenuItemsFun} className="menu-item">
                <span><i className="uil uil-settings"></i></span><h3>Settings</h3>
            </p>
        </div>

        <label for="create-post" className="btn btn-primary">Create Post</label>
    </div>
    )
}