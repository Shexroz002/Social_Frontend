import './style.css'
import rsa from "./profile-14.jpg"
export default function Navbar(){
    return(
        <>
        <nav>
        <div className="container">
            <h2 className="log">
                nokoSocial
            </h2>
            <div className="search-bar">
                <i className="uil uil-search"></i>
                <input type="search" placeholder="Search for creators, inspirations, and projects"/>
            </div>
            <div className="create">
                <label className="btn btn-primary" for="create-post">Create</label>
                <div className="profile-photo">
                    <img src={rsa} alt=""/>
                </div>
            </div>
        </div>
    </nav>
        </>
    )
}