import './style.css'
export default function Right(){
    return(
        <div className="right">
        <div className="messages" >
            <div className="heading">
                <h4>Message</h4><i className="uil uil-edit"></i>
            </div>

            <div className="search-bar">
                <i className="uil uil-search"></i>
                <input type="search" placeholder="Search messages" id="message-search"/>
            </div>

            <div className="category">
                <h6 className="active">Primary</h6>
                <h6>General</h6>
                <h6 className="messages-requests">Requests(2)</h6>
            </div>

            <div className="message">
                <div className="profile-photo">
                    <img src="./images/profile-17.jpg" alt=""/>
                </div>
                <div className="message-body">
                    <h5>Edem Quist</h5>
                    <p className="text-muted">Just woke up bruh</p>
                </div>
            </div>

            <div className="message">
                <div className="profile-photo">
                    <img src="./images/profile-19.jpg" alt=""/>
                    <div className="active"></div>
                </div>
                <div className="message-body">
                    <h5>Edem Quist</h5>
                    <p className="text-muted">Just woke up bruh</p>
                </div>
            </div>

            <div className="message">
                <div className="profile-photo">
                    <img src="./images/profile-15.jpg" alt=""/>
                </div>
                <div className="message-body">
                    <h5>Edem Quist</h5>
                    <p className="text-muted">Just woke up bruh</p>
                </div>
            </div>
            <div className="message">
                <div className="profile-photo">
                    <img src="./images/profile-15.jpg" alt=""/>
                </div>
                <div className="message-body">
                    <h5>Edem Quist</h5>
                    <p className="text-muted">Just woke up bruh</p>
                </div>
            </div>
            <div className="message">
                <div className="profile-photo">
                    <img src="./images/profile-15.jpg" alt=""/>
                </div>
                <div className="message-body">
                    <h5>Edem Quist</h5>
                    <p className="text-muted">Just woke up bruh</p>
                </div>
            </div>
            <div className="message">
                <div className="profile-photo">
                    <img src="./images/profile-15.jpg" alt=""/>
                </div>
                <div className="message-body">
                    <h5>Edem Quist</h5>
                    <p className="text-muted">Just woke up bruh</p>
                </div>
            </div>
            <div className="message">
                <div className="profile-photo">
                    <img src="./images/profile-15.jpg" alt=""/>
                </div>
                <div className="message-body">
                    <h5>Edem Quist</h5>
                    <p className="text-muted">Just woke up bruh</p>
                </div>
            </div>
        </div>

        <div className="friend-requests">
            <h4>Requests</h4>
            <div className="request">
                <div className="info">
                    <div className="profile-photo">
                        <img src="./images/profile-13.jpg" alt=""/>
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

            <div className="request">
                <div className="info">
                    <div className="profile-photo">
                        <img src="./images/profile-14.jpg" alt=""/>
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

            <div className="request">
                <div className="info">
                    <div className="profile-photo">
                        <img src="./images/profile-15.jpg" alt=""/>
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
        </div>
    </div>
    )
}