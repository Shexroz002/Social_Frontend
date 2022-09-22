import Main from "../Companents/Main"
import Theme from "../Companents/Theme"
import Navbar from "../Companents/Navbar"
import '../Companents/style.css'
import { useState } from "react"
export default function Home(){
    const [opentheme,setopentheme]=useState(false)
    function openthemefun(){
        setopentheme(prev=> !prev)
    }
    return(
        <>
        <Navbar/>
        <Main opentheme={openthemefun}/>
        <Theme openshow={opentheme} showTeheme={openthemefun}  />
         </>
    )
       
        
}