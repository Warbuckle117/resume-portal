import React from "react"
import { Link } from "react-router-dom"

export default function Narcy() {
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"}}
        >
            <h1>
                Narcy Page
            </h1>
            <p>
                This is the Narcy page with Mark tooo
            
            </p>
            <p>
                return to <Link to="/">Home</Link>
            </p>
        </div>
    )
}