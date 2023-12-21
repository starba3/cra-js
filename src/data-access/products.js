import { sendGet, sendDelete, sendPost, sendPatch } from "src/helpers/requestHelper";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getAllProducts() {
    const url = `${baseUrl}/Product`;
    return  sendGet(url, []);
}

export async function deleteProduct(id) {
    const url = `${baseUrl}/Product/${id}/Delete`;
    return sendDelete(url);
}

export async  function getProductById(id) {
    const url = `${baseUrl}/Product/${id}`;
    return  sendGet(url, {}); 
}

export async function createEditProduct(body, method = "post", id) {
    const url =  method === "post" 
        ? `${baseUrl}/Product`
        : `${baseUrl}/Product/${id}`; // Patch

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