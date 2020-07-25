import React, { useContext } from "react"
import { useUser } from "./loginContext"

const Header = () => {
    const { name, loggedIn } = useUser()
    return (
        <header>
            <a href="#">Home</a>
            Hello! { name }, you are { loggedIn ? "logged in" : "anonymous" }
        </header>
    )
}

export default Header