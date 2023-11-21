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