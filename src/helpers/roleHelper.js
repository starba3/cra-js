export const getUserRole = () => {
    const role = localStorage.getItem("role") 
    ? JSON.parse(localStorage.getItem("role")).value 
    : ""

    // if (role === "Admin") {
        // role = "Head of Engineer"
        // role = "Head of Collectors"
        // role = "Head of Sales"   
        // role = "Sales"
        // role = "Sales"
        // role = "Operation"
    // }
    
    // console.log("Role ", role.toLowerCase())
    return role.toLowerCase()
}

