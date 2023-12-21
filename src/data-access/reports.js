import { sendGet } from "src/helpers/requestHelper";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getAgingReport() {
    const url = `${baseUrl}/api/Reports/aging`;
    return  sendGet(url, []);
}

export async function getGmReport(source) {
    const url = `${baseUrl}/api/Reports/GmReport?collection=${source}`;
    return  sendGet(url, []);
}

export async function getGmReasonReport(source, status) {
    const url = `${baseUrl}/api/Reports/GmReasonReport?collection=${source}&status=${status}`;
    return  sendGet(url, []);
}