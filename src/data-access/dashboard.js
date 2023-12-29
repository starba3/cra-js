import { sendGet } from "src/helpers/requestHelper";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getDashboardData() {
    const url = `${baseUrl}/api/Dashboard`;
    return  sendGet(url, {});
}