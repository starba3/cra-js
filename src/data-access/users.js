const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getUsersByRole(role) {
    let users = []
    await fetch(`${baseUrl}/api/User/UsersNameByRole/${role}`, {
        mode:'cors'
    })
    .then(result => result.json())
    .then(res => {
        users = res
    })
    .catch(error => console.log())

    return users
}

export async function getAllUsers() {
    let users = []
    await fetch(`${baseUrl}/api/User`, {
        mode:'cors'
    })
    .then(result => result.json())
    .then(res => {
        users = res
    })
    .catch(error => console.log())

    return users
}

export async function getInvoicesForUser(id) {
    let users = []
    await fetch(`${baseUrl}/api/Invoices/GetInvoicesForUser?User=${id}`, {
        mode:'cors'
    })
    .then(result => result.json())
    .then(res => {
        users = res
    })
    .catch(error => console.log())

    return users
}

export async function getUsersRoles() {
    const roles = [{
        "id": "0",
        "name": "All",
    }];
    
    await fetch(`${baseUrl}/api/User/roles`, {
        mode:'cors'
    })
    .then(result => result.json())
    .then(res => {
        roles.push(...res);
    })
    .catch(error => console.log())

    return roles
}