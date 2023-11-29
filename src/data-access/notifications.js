import { paths } from "src/routes/paths"


const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';
const STORAGE_KEY = 'accessToken';

export async function getAllNotifications() {

    const accessToken = sessionStorage.getItem(STORAGE_KEY);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    let list = []
    await fetch(`${baseUrl}/api/Notifications`, {
        mode:'cors',
        headers: myHeaders
    })
    .then(result => result.json())
    .then(notifications => {
        list = notifications;
    })
    .catch(error => console.log())
    
    return list;
}

