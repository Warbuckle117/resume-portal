import React from "react"
import { Link } from "react-router-dom"

export default function About() {
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"}}
        >
            <h1>
                About Page
            </h1>
            <p>
                This is the About page
            </p>
            <p>
                return to <Link to="/Home">Home</Link>
            </p>
        </div>
    )
}