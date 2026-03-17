import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"



export default function MainPage() {
    return(
        <div>
            <Header/>
            <MainPageContent/>
            <Footer/>
        </div>
    )
}

function MainPageContent () {
    const [loggedIn , setLoggedIn] = useState(false)
    let userName = "placeHolder"
    return (
        <div>
            <h1>{!loggedIn ? "Welcome to Minimo Traveller!" : `Welcome back to Minimo ${userName}!`}</h1>
            <button onClick={()=>{setLoggedIn(!loggedIn)}}> Log In! </button>
        </div>
    )
}