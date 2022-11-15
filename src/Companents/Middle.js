import './style.css'
import rsa from "./profile-14.jpg"
import Story from './Story'
import Feeds from './Feeds'
export default function Middle() {
    return (
        <div className="middle">
            <Story/>
            <div className="create-post">
                <div className="profile-photo">
                    <img src={rsa} alt="" />
                </div>
                <button type="submit"  className="btn btn-primary"  >Post</button>
            </div>
            <Feeds/>
        </div>

    )
}