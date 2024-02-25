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

export async function sendPut(url, body, headers = {}) {
    try {
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
        case 'admin':
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
        case 'head of engineer':
            url = `${baseUrl}/api/HeadOfEngineer`
            break
        case 'head of collectors':
            url = `${baseUrl}/api/HeadOfCollector`
            break
        case 'head of sales':
            url = `${baseUrl}/api/HeadOfSales`
            break
        default:
            url = `${baseUrl}`
            break
    }
    return url
}

export function createHeaders(role) {
    let headers = {}
    
    if (['sales', 'installation', 'collector', 'collection'].includes(role.toLowerCase())) {
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