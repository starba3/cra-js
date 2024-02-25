import { sendGet, sendDelete, sendPost, sendPatch, createBaseUrlWithRole } from "src/helpers/requestHelper";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getAllSalesTakers(role) {
    const url = `${createBaseUrlWithRole(role)}/users`;
    return sendGet(url, []);
}

export async  function getSalesTakerById(id) {
    const url = `${baseUrl}/Customer/${id}`;
    return sendGet(url, {});;
}

export async function createEditSalesTaker(body, method = "post", id) {
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

export async function deleteSalesTaker(id, role) {
    
    const url = `${createBaseUrlWithRole(role)}/SalesTaker/${id}/Delete`;
    const errorMessage = await sendPatch(url);
    return !errorMessage; // true if empty(no error)
}
