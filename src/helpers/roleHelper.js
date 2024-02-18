import React from "react"

export const getUserRole = () => {
    let ROLE = localStorage.getItem("role") 
    ? JSON.parse(localStorage.getItem("role")).value 
    : "operation"

    if (ROLE === "Admin") {
        ROLE = "operation"
    }

    
    return ROLE
}

