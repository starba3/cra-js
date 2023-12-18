
// import { result } from "lodash";
import axios from "axios";
import { paths } from "src/routes/paths"

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getAllInvoices() {
    let list = [];

    try {
        const response = await axios.get(`${baseUrl}/api/invoices`);
        list = response.data;
    } catch (error) {
        console.log("Fetching error: ", error)
    }
    // await fetch(`${baseUrl}/api/invoices`, {
    //     mode:'cors'
    // })
    // .then(response => response.json())
    // .then(invoices => {
    //     list = invoices
    // })
    // .catch(error => console.log())

    return list;
}

export async function getInvoicesByDepartment(id) {
    let list = [];

    try {
        const response = await axios.get(`${baseUrl}/api/Invoices/Department/${id}`);
        list = response.data;
    } catch (error) {
        console.log("Fetching error: ", error)
    }

    // await fetch(`${baseUrl}/api/Invoices/Department/${id}`, {
    //     mode:'cors'
    // })
    // .then(response => response.json())
    // .then(invoices => {
    //     list = invoices
    // })
    // .catch(error => console.log())

    return list;
}

export async function getInvoicesBySalesConfirmation(confirmStatus) {
    let list = []
    let url = '';

    if(confirmStatus) {
        url = `${baseUrl}/api/Invoices/GetInvoicesBySalesConfirmation?salesConfirm=${confirmStatus}`;
    }
    else {
        url = `${baseUrl}/api/Invoices/NotConfirmedBySales`;
    }

    try {
        const response = await axios.get(url);
        list = response.data;
    } catch (error) {
        console.log("Fetching error: ", error)
    }

    return list
}

export async  function getInvoicesById(id) {
    let invoice = {};

    try {
        const response = await axios.get(`${baseUrl}/api/invoices/${id}`);
        invoice = response.data;
    } catch (error) {
        console.log("Fetching error: ", error)
    }

    return invoice; // Return an empty object by default or handle errors as needed.
    
}

function getInvoiceEditUrl(departmentId, invoiceId) {

    let url = ''
    switch (departmentId) {
        case -1:
        case 0:
            url = `${baseUrl}/api/Invoices/${invoiceId}/Edit/Operation`
            break;
        case 1:
            url = `${baseUrl}/api/Invoices/${invoiceId}/Edit/installation`
            break;
        case 2:
            url = `${baseUrl}/api/Invoices/${invoiceId}/Edit/Sales`
            break;
        case 3:
            url = `${baseUrl}/api/Invoices/${invoiceId}/Edit/Collection`
            break;   
        case 4:
            url = `${baseUrl}/api/Invoices/${invoiceId}/Edit/TenderAndContracts`
            break;     
        default:
            break;
    }

    return url; // Return an empty object by default or handle errors as needed.
    
}

export function getInvoiceRedirectUrl(departmentId) {

    let url = ''
    switch (departmentId) {
        case -1:
        case 0:
            url = paths.departments.operation.list;
            break;
        case 1:
            url = paths.departments.installation.list;
            break;
        case 2:
            url = paths.departments.sales.list;
            break;
        case 3:
            url = paths.departments.collection.list;
            break;   
        case 4:
            url = paths.departments.tenderAndConract.list;
            break;     
        default:
            break;
    }

    return url; // Return an empty object by default or handle errors as needed.
    
}

export function getInvoiceImportUrl() {

    const url = `${baseUrl}/api/ExcelImport/import-invoices`
    return url; 
    
}

export function getAddAttachmentUrl(id) {

    const url = `${baseUrl}/api/Attachments/${id}`
    return url; 
    
}

export async function getCollectionData() {

    let list = [];

    try {
        const response = await axios.get(`${baseUrl}/api/CollectionData`);
        list = response.data;
    } catch (error) {
        console.log("Fetching error: ", error)
    }

    return list;
}

export async function getInvoiceInquiryData(id) {
    let data = {};

    try {
        const response = await axios.get(`${baseUrl}/api/Invoices/${id}/Inquiry`);
        data = response.data;
    } catch (error) {
        console.log("Fetching error: ", error)
    }

    return data;
}

export async function getInvoiceForCustomers(customers) {
    let list = [];

    if(!customers)
        return list;

    const queryData = customers.reduce((acc, customer) => `${acc}customerIds=${customer}&`, '');
    // queryData = queryData.slice(-1);

    try {
        const response = await axios.get(`${baseUrl}/api/Invoices/GetInvoicesForCustomers?${queryData}`);
        list = response.data;
    } catch (error) {
        console.log("Fetching error: ", error)
    }

    return list;
}

export async function deleteInvoice(id) {
    let success = true;

    try {
        const response = await axios.patch(`${baseUrl}/api/Invoices/${id}/Delete`);
    } catch (error) {
        console.log("Delete error: ", error)
        success = false;
    }

    return success;
}

export async function createInvoice(body) {
    let success = true;

    try {
        const response = await axios.post(`${baseUrl}/api/Invoices`, body);
    } catch (error) {
        console.log("Create error: ", error)
        success = false;
    }

    return success;
}

export async function editInvoice(id, departmentId, body) {

    try {
        const url = getInvoiceEditUrl(departmentId, id);

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

export async function addAttachment(url, formData) {
    let success = true;

    try {
        const response = await axios.post(url, formData, {
            headers: {
            'Content-Type': 'multipart/form-data',
          },
          timeout: 3000, // Adjust timeout as needed
        });
    } catch (error) {
        // Handle other errors
        console.error('Axios Error:', error);
        success = false;
    } 

    return success;
}

