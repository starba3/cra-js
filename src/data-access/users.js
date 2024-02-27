import { sendGet, createBaseUrlWithRole, sendPostPatchRequest } from "src/helpers/requestHelper";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getUsersByRole(role) {
    const url = `${baseUrl}/api/User/UsersNameByRole/${role}`;
    return  sendGet(url, []);
}

export async function getAllUsers() {
    const url = `${baseUrl}/api/User`;
    return  sendGet(url, []);
}

export async function getAllUsersForReports(role) {
    const url = `${createBaseUrlWithRole(role)}/users`;
    return  sendGet(url, []);
}

export async function getInvoicesForUser(id) {
    const url = `${baseUrl}/api/Invoices/GetInvoicesForUser?User=${id}`;
    return  sendGet(url, []);
}

export async function getUsersRoles() {
    const url = `${baseUrl}/api/User/roles`;

    const roles = [{
        "id": "0",
        "name": "All",
    }];

    const data = await sendGet(url, []);
    roles.push(...data);

    return roles;
}

export async function createUser(body, role) {
    const url = `${createBaseUrlWithRole(role)}/Users`;
    return sendPostPatchRequest("post", url, body)
}