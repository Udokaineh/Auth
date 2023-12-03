import React from "react"
import { useNavigate } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth"
import "./App.css"

const HomePage = () => {
    const auth = getAuth()
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            await signOut(auth)
            return navigate("/login")
        } catch (error) {
            console.error("Error logging out:", error.message)
        }
    }
    return (
        <div className="homepage">
            <h2>Firebase Authorization</h2>
            <p>This project serves to showcase my expertise in harnessing contemporary technologies to enhance the overall reliability and performance of web applications. Specifically, it aims to demonstrate my skills in utilizing Firebase for login and signup authorization.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default HomePage