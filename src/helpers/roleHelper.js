export const getUserRole = () => {
    const role = localStorage.getItem("role") 
    ? JSON.parse(localStorage.getItem("role")).value 
    : ""

    // console.log("Role ", role.toLowerCase())
    return role.toLowerCase()
}

