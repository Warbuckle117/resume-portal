import React from "react"
import { Link } from "react-router-dom"


export default function Splashpage() {
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"}}
        >
            <h1>
                Splash Page
            </h1>
            <p>
                Try <Link to="/About">About</Link> Page as well
            </p>
        </div>
    )
}