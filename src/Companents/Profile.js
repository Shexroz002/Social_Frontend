import rsa from "./profile-14.jpg"
import './style.css'
export default function Profile(){
    return(
        <>
         <a href="/" className="profile">
            <div className="profile-photo">
                <img src={rsa} alt=""/>
            </div>
            <div className="handle">
                <h4>Diana Ayi</h4>
                <p className="text-muted">
                    @dayi
                </p>
            </div>
        </a>
        </>
    )
}