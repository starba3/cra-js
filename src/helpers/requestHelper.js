import axios from "axios";
import { getUserRole } from "./roleHelper";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

const STORAGE_KEY = 'accessToken';

const ROLE = getUserRole()

export async function sendGet(url, defaultValue, headers = {}) {
    let data = defaultValue;
    const authHeader = createHeaders(ROLE)
    headers = {...headers, ...authHeader}
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
    
    const authHeader = createHeaders(ROLE)
    headers = {...headers, ...authHeader}
    
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
        const authHeader = createHeaders(ROLE)
        headers = {...headers, ...authHeader}

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

export async function sendPut(url, body, headers = {}) {
    try {
        const authHeader = createHeaders(ROLE)
        headers = {...headers, ...authHeader}

        const response = await axios.put(url, body, { headers });
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
        const authHeader = createHeaders(ROLE)
        headers = {...headers, ...authHeader}
        
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
    switch(role) {
        case 'admin': {
            url = `${baseUrl}/api/Admin`
            break
        }
        case 'operation':
            url = `${baseUrl}/api/Operation`
            break
        case 'sales':
            url = `${baseUrl}/api/SalesTaker`
            break
        case 'collection':
            url = `${baseUrl}/api/Collector`
            break
        case 'installation':
            url = `${baseUrl}/api/Engineer`
            break
        case 'headofengineer':
            url = `${baseUrl}/api/HeadOfEngineer`
            break
        case 'headofcollector':
            url = `${baseUrl}/api/HeadOfCollector`
            break
        case 'headofsales':
            url = `${baseUrl}/api/HeadOfSales`
            break
        case 'guest':
            url = `${baseUrl}/api/Account`
            break
        default:
            url = `${baseUrl}`
            break
    }
    return url
}

export function createHeaders(role) {
    let headers = {}
    
    if (role) {
        const token = localStorage.getItem(STORAGE_KEY) && JSON.parse(localStorage.getItem(STORAGE_KEY)).value;
        headers = {
            "Authorization": `Bearer ${token}`
        };
    }

    return headers
}

export async function sendPostPatchRequest(method, url, body = {}, headers = {}) {
    
    const response = method.toLowerCase() === "patch"
        ? await sendPatch(url, body, headers)
        : await sendPost(url, body, headers)

    const responseObj = {
        success: !response,
        errorMessage: response // Empty in successful request
    }

    return responseObj
}