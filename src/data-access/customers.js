import axios from "axios";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getAllCustomers() {
    let list = [];

    try {
        const response = await axios.get(`${baseUrl}/customer`);
        list = response.data;
    } catch (error) {
        console.log("Fetching error: ", error)
    }

    return list;
}

export async function GetAllCustomersWithAll() {

    const list = [{
        "id": "0",
        "customerCode": "All",
        "customerNameEn": "All",
        "customerNameAr": "All",
    }];

    try {
        const response = await axios.get(`${baseUrl}/customer`);
        list.push(...response.data);
    } catch (error) {
        console.log("Fetching error: ", error)
    }

    return list;

}

export async function getSalesPersonList() {
    let list = []

    try {
        const response = await axios.get(`${baseUrl}/api/User/UsersNameByRole/sales`);
        list = response.data;
    } catch (error) {
        console.log("Fetching error: ", error);
    }

    return list;
}

export async  function getCustomerById(id) {

    try {
        const response = await axios.get(`${baseUrl}/Customer/${id}`);
        return response.data;
    } catch (error) {
        console.log("Fetching error: ", error);
    }

    return {}; 
    
}

export async function createCustomer(body) {
    let success = true;

    try {
        const response = await axios.post(`${baseUrl}/Customer/add`, body);
    } catch (error) {
        console.log("Create error: ", error);
        success = false;
    }

    return success;
}

export async function editCustomer(id, body) {
    try {
        
        const url = `${baseUrl}/Customer/${id}`

        const response = await axios.patch(url, body);
        console.log(response);
        if (!response.ok) {
            if (response.status === 400) {
                // If status code is 400, return the error message
                
                const error = await response.data;
                throw new Error(error);
            }
            // For other error status codes, throw a generic error
            // throw new Error('Network response was not ok');
        }

        // Return null if there is no error
        return null;
    } catch (error) {
        console.log(error);
        
        if(axios.isAxiosError(error))
            return error.response.data
        // Return the error message
        
        return error.message;
    }
}

export async function deleteCustomer(id) {
    let success = true;

    try {
        const response = await axios.patch(`${baseUrl}/Customer/${id}/Delete`);
    } catch (error) {
        console.log("Fetching error: ", error);
        success = false;
    }

    return success;
}