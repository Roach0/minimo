import Header from "./Header"
import Footer from "./Footer"
// import { useEffect } from "react"



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
    return (
        <p>Test Test Test</p>
    )
}