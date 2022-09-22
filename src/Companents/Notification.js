import rsa from "./profile-14.jpg"
import './style.css'
export default function Notification(){
    return(
        <div className="notification-popup">
                    <div className="request">
                        <div className="info">
                            <div className="profile-photo">
                                <img src={rsa} alt=""/>
                            </div>
                            <div>
                                <h5>Hajia Bintu</h5>
                                <p className="text-muted">
                                    8 mutual friends
                                </p>
                            </div>
                        </div>
                        <div className="action">
                            <button className="btn btn-primary">
                                Accept
                            </button>
                            <button className="btn">
                                Decline
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="profile-photo">
                            <img src={rsa} alt="" />
                        </div>
                        <div className="notification-body">
                            <b>Keke Benjamin</b> accepted your friend request
                            <small className="text-muted">2 DAYS AGO</small>
                        </div>
                    </div>
                    <div>
                        <div className="profile-photo">
                            <img src={rsa} alt="" />
                        </div>
                        <div className="notification-body">
                            <b>Keke Benjamin</b> accepted your friend request
                            <small className="text-muted">2 DAYS AGO</small>
                        </div>
                    </div>
                    <div>
                        <div className="profile-photo">
                            <img src={rsa} alt="" />
                        </div>
                        <div className="notification-body">
                            <b>Keke Benjamin</b> accepted your friend request
                            <small className="text-muted">2 DAYS AGO</small>
                        </div>
                    </div>
                    <div>
                        <div className="profile-photo">
                            <img src={rsa} alt="" />
                        </div>
                        <div className="notification-body">
                            <b>Keke Benjamin</b> accepted your friend request
                            <small className="text-muted">2 DAYS AGO</small>
                        </div>
                    </div>
                    <div>
                        <div className="profile-photo">
                            <img src={rsa} alt=""/>
                        </div>
                        <div className="notification-body">
                            <b>Keke Benjamin</b> accepted your friend request
                            <small className="text-muted">2 DAYS AGO</small>
                        </div>
                    </div>
                </div>
    )
}