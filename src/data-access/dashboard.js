import { paths } from "src/routes/paths"
import axios from 'axios';

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getDashboardData() {
    let data = {};

    try {
        data = await axios.get(`${baseUrl}/api/Dashboard`);
    } catch (error) {
        console.log("Fetching error: ", error)
    }
    

    return data;
}