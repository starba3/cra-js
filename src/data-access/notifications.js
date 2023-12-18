import axios from "axios";
import { paths } from "src/routes/paths"


const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';
const STORAGE_KEY = 'accessToken';

axios.defaults.headers.common.Authorization = `Bearer ${JSON.parse(localStorage.getItem(STORAGE_KEY)).value}`;

export async function getAllNotifications() {
    let list = [];

    try {
        const response = await axios.get(`${baseUrl}/api/Notifications`);
        list = response.data;
    } catch (error) {
        console.log("Fetching error: ", error);
    }

    
    return list;
}

