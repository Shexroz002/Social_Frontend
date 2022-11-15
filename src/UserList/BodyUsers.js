import './style.css'
import Header from './Header'
import UserList from './UserList'
export default function Body(){
    return(
        <div className="wrapperuser" style={{ max_width :"650px",
            width: "100%",}}>
        <section className="users">

        <Header/>
        <UserList/>
            </section></div>
    )
}