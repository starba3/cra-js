import { sendGet, sendDelete, sendPost, sendPatch, createBaseUrlWithRole } from "src/helpers/requestHelper";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getAllEngineers(role) {
    const url = `${createBaseUrlWithRole(role)}/users`;
    return sendGet(url, []);
}

export async  function getEngineerById(id) {
    const url = `${baseUrl}/Customer/${id}`;
    return sendGet(url, {});;
}

export async function createEditCustomer(body, method = "post", id) {
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

export async function deleteEngineer(id, role) {
    
    const url = `${createBaseUrlWithRole(role)}/engineer/${id}/Delete`;
    const errorMessage = await sendPatch(url);
    return !errorMessage; // true if empty(no error)
}