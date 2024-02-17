import axios from "axios";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

const STORAGE_KEY = 'accessToken';


export async function sendGet(url, defaultValue, headers = {}) {
    let data = defaultValue;

    try {
        const response = await axios.get(url, { headers })
        data = response.data;
    } catch(error) {
        console.log("Request Error: ", error);
    }

    return data;
}

export async function sendDelete(url, body = {}, headers = {}) {
    let success = true;
    
    try {
        const response = await axios.patch(url, body, { headers })
    } catch(error) {
        console.log("Request Error: ", error);
        success = false;
    }

    return success;
}

export async function sendPost(url, body, headers = {}) {
    try {
        const response = await axios.post(url, body, { headers });
        // console.log(response);
        if (!response.ok) {
            if (response.status >= 400) {
                // If status code is 400, return the error message
                
                const error = await response.data;
                throw new Error(error);
            }
        }

        // Return null if there is no error
        return null;
    } catch (error) {
        console.log(error);
        // Return the error message
        if(axios.isAxiosError(error))
            return error.response.data
            
        return error.message;
    }
}

export async function sendPatch(url, body = {}, headers = {}) {
    try {

        const response = await axios.patch(url, body, { headers });
        // console.log(response);
        if (!response.ok) {
            if (response.status >= 400) {
                // If status code is 400, return the error message
                
                const error = await response.data;
                throw new Error(error);
            }
        }

        // Return null if there is no error
        return null;
    } catch (error) {
        console.log(error);
        // Return the error message
        if(axios.isAxiosError(error))
            return error.response.data
            
        return error.message;
    }
}

export function createBaseUrlWithRole(role) {
    let url = ''
    switch(role.toLowerCase()) {
        case 'operation':
            url = `${baseUrl}/api/Operation`
            break
        case 'sales':
            url = `${baseUrl}/api/SalesTaker`
            break
        case 'engineer':
            url = `${baseUrl}/api/Engineer`
            break
        default:
            url = `${baseUrl}`
            break
    }
    return url
}

export function createHeaders(role) {
    let headers = {}
    
    if (['sales'].includes(role.toLowerCase())) {
        const token = localStorage.getItem(STORAGE_KEY) && JSON.parse(localStorage.getItem(STORAGE_KEY)).value;
        headers = {
            "Authorization": `Bearer ${token}`
        };
    }

    return headers
}