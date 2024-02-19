import { sendGet, createBaseUrlWithRole } from "src/helpers/requestHelper";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getInstallationStatus() {
    const url = `${baseUrl}/api/Lookups/installtion-statuses`;
    return  sendGet(url, []);
}
