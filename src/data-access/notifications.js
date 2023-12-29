import { sendGet } from "src/helpers/requestHelper";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';
const STORAGE_KEY = 'accessToken';

export async function getAllNotifications() {
    const url = `${baseUrl}/api/Notifications`;
    const token = localStorage.getItem(STORAGE_KEY) && JSON.parse(localStorage.getItem(STORAGE_KEY)).value;
    const headers = {
        "Authorization": `Bearer ${token}`
    };
    return sendGet(url, [], headers);    
}

