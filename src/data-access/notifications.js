import axios from "axios";
import { paths } from "src/routes/paths"


const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';
const STORAGE_KEY = 'accessToken';


export async function getAllNotifications() {
    let list = [];
    // axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(STORAGE_KEY) && JSON.parse(localStorage.getItem(STORAGE_KEY)).value }`;

    try {
        const response = await axios.get(`${baseUrl}/api/Notifications`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem(STORAGE_KEY) && JSON.parse(localStorage.getItem(STORAGE_KEY)).value }`
            },
        });
        
        list = response.data;
    } catch (error) {
        console.log("Fetching error: ", error);
    }

    
    return list;
}

