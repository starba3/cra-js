import { paths } from "src/routes/paths"


const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';
const STORAGE_KEY = 'accessToken';

export async function getAllNotifications() {

    // localStorage.clear();
    const accessToken = JSON.parse(localStorage.getItem(STORAGE_KEY));
    // console.log('accessToken: ', accessToken.value)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${accessToken.value}`);

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

