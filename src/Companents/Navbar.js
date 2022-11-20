import './style.css'
import rsa from "./profile-14.jpg"
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <>
        <nav>
        <div className="container">
            <h2 className="log">
                nokoSocial
            </h2>
            <Link to='/users/search/'><div className="search-bar">
                <i className="uil uil-search"></i>
                <input type="search" placeholder="Search for creators, inspirations, and projects"/>
            </div></Link>
            <div className="create">
            <Link to='/createstory/'><label className="btn btn-primary" for="create-post">Create Story</label></Link>
                <div className="profile-photo">
                    <img src={rsa} alt=""/>
                </div>
            </div>
        </div>
    </nav>
        </>
    )
}