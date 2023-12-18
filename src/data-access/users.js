import axios from "axios";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getUsersByRole(role) {
    let users = [];

    try {
        const response = await axios.get(`${baseUrl}/api/User/UsersNameByRole/${role}`);
        users = response.data;
    } catch (error) {
        console.log("Fetching error: ", error);
    }

    return users;
}

export async function getAllUsers() {
    let users = [];

    try {
        const response = await axios.get(`${baseUrl}/api/User`);
        users = response.data;
    } catch (error) {
        console.log("Fetching error: ", error);
    }

    return users;
}

export async function getInvoicesForUser(id) {
    let users = [];

    try {
        const response = await axios.get(`${baseUrl}/api/Invoices/GetInvoicesForUser?User=${id}`);
        users = response.data;
    } catch (error) {
        console.log("Fetching error: ", error);
    }

    return users;
}

export async function getUsersRoles() {
    const roles = [{
        "id": "0",
        "name": "All",
    }];
    
    try {
        const response = await axios.get(`${baseUrl}/api/User/roles`);
        roles.push(...response.data);
    } catch (error) {
        console.log("Fetching error: ", error);
    }

    return roles;
}