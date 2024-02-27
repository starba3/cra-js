import { sendGet } from "src/helpers/requestHelper";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getAllNotifications(role) {
    let url = "";
    if(role.includes("head") || role === "operation") {
        url = `${baseUrl}/api/Notifications/by-role`;
    }
    else {
        url = `${baseUrl}/api/Notifications/by-user`;
    }
        
    return sendGet(url, []);    
}

