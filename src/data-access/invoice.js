
import { paths } from "src/routes/paths"

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';


export async function getAllInvoices() {
    let list = []
    await fetch(`${baseUrl}/api/invoices`, {
        mode:'cors'
    })
    .then(result => result.json())
    .then(invoices => {
        list = invoices
    })
    .catch(error => console.log())

    return list
}

export async function getInvoicesByDepartment(id) {
    let list = []
    await fetch(`${baseUrl}/api/Invoices/Department/${id}`, {
        mode:'cors'
    })
    .then(result => result.json())
    .then(invoices => {
        list = invoices
    })
    .catch(error => console.log())

    return list
}

export async function getInvoicesBySalesConfirmation(confirmStatus) {
    let list = []
    await fetch(`${baseUrl}/api/Invoices/GetInvoicesBySalesConfirmation?salesConfirm=${confirmStatus}`, {
        mode:'cors'
    })
    .then(result => result.json())
    .then(invoices => {
        list = invoices
    })
    .catch(error => console.log())

    return list
}

export async  function getInvoicesById(id) {
    try {
        const response = await fetch(`${baseUrl}/api/invoices/${id}`, {
            mode: 'cors'
        });

        if (response.ok) {
            const invoice = await response.json();
            return invoice;
        } 
            // Handle non-successful response here if needed.
            console.error(`Failed to fetch invoice: ${response.status} - ${response.statusText}`);
        
    } catch (error) {
        console.error(error);
    }

    return {}; // Return an empty object by default or handle errors as needed.
    
}

export function getInvoiceEditUrl(departmentId, invoiceId) {

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

export async function getCollectionData() {
    let list = []
    await fetch(`${baseUrl}/api/CollectionData`, {
        mode:'cors'
    })
    .then(result => result.json())
    .then(invoices => {
        list = invoices
    })
    .catch(error => console.log())

    return list
}
