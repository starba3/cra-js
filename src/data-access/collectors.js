import { sendGet, sendDelete, sendPost, sendPatch, createBaseUrlWithRole } from "src/helpers/requestHelper";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getAllCollectors(role) {
    const url = `${createBaseUrlWithRole(role)}/users`;
    return sendGet(url, []);
}

export async  function getCollectorById(id) {
    const url = `${baseUrl}/Customer/${id}`;
    return sendGet(url, {});;
}

export async function createEditCollector(body, method = "post", id) {
    const url =  method === "post" 
        ? `${baseUrl}/Customer/add`
        : `${baseUrl}/Customer/${id}`; // Patch

    const responseObj = {
        success: true,
        errorMessage: ""
    };

    const response = method === "post" 
        ? await sendPost(url, body)
        : await sendPatch(url, body);

    responseObj.errorMessage = response;
    responseObj.success = !response;

    return responseObj;
}

export async function deleteCollector(id, role) {
    
    const url = `${createBaseUrlWithRole(role)}/collector/${id}/Delete`;
    const errorMessage = await sendPatch(url);
    return !errorMessage; // true if empty(no error)
}
