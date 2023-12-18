import axios from "axios";
import { paths } from "src/routes/paths"

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getAgingReport() {
    let list = [];

    try {
        const response = await axios.get(`${baseUrl}/api/Reports/aging`);
        list = response.data;
    } catch (error) {
        console.log("Fetching error: ", error);
    }

    return list;
}

export async function getGmReport(source) {
    let list = [];

    try {
        const response = await axios.get(`${baseUrl}/api/Reports/GmReport?collection=${source}`);
        list = response.data;
    } catch (error) {
        console.log("Fetching error: ", error);
    }

    return list;
}

export async function getGmReasonReport(source, status) {
    let list = [];

    try {
        const response = await axios.get(`${baseUrl}/api/Reports/GmReasonReport?collection=${source}&status=${status}`);
        list = response.data;
    } catch (error) {
        console.log("Fetching error: ", error);
    }

    return list;
}