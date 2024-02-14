import React from "react"

export const getUserRole = () => {
    const ROLE = localStorage.getItem("role") 
    ? JSON.parse(localStorage.getItem("role")).value
    : "operation"

    return ROLE
}

