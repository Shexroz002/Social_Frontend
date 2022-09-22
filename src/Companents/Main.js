import Left from "./Left"
import Middle from "./Middle"
import Right from "./Right"
import './style.css'
export default function Main(props){
    const {opentheme} = props;
    return(
        <main>
        <div className="container">
            <Left openshow={opentheme}/>
            <Middle/>
            <Right/>
        </div> 
        </main>
    )
}