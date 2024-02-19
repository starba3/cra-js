import React from "react"

export const getUserRole = () => {
    let ROLE = localStorage.getItem("role") 
    ? JSON.parse(localStorage.getItem("role")).value 
    : "Head of Engineer"

    if (ROLE === "Admin") {
        ROLE = "Head of Engineer"
        // ROLE = "Sales"
        // ROLE = "Operation"
    }

    
    return ROLE
}

