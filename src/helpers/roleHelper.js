import React from "react"

export const getUserRole = () => {
    let role = localStorage.getItem("role") 
    ? JSON.parse(localStorage.getItem("role")).value 
    : "Head of Engineer"

    if (role === "Admin") {
        // role = "Head of Engineer"
        // role = "Head of Collectors"
        role = "collection"
        // role = "Sales"
        // role = "Operation"
    }

    // console.log("Role ",role)
    return role.toLowerCase()
}

