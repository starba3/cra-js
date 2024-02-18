import { sendGet, sendDelete, sendPost, sendPatch, createBaseUrlWithRole } from "src/helpers/requestHelper";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getAllEngineers(role) {
    const url = `${createBaseUrlWithRole(role)}/users`;

    return sendGet(url, []);
}

export async function GetAllCustomersWithAll() {
    const url = `${baseUrl}/customer`;

    const list = [{
        "id": "0",
        "customerCode": "All",
        "customerNameEn": "All",
        "customerNameAr": "All",
    }];

    const data = await sendGet(url, []);
    list.push(...data);

    return list;
}

export async function getSalesPersonList() {
    const url = `${baseUrl}/api/User/UsersNameByRole/sales`;
    return sendGet(url, []);;
}

export async  function getCustomerById(id) {
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