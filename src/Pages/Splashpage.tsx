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
                Opps that page doesn't exist
            </h1>
            <p>
                You seem to be lost return to <Link to="/">Home</Link>
            </p>
        </div>
    )
}