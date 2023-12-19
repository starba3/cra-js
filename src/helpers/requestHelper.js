import axios from "axios";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

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
            if (response.status === 400) {
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
            if (response.status === 400) {
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