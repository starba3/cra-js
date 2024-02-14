
// import { result } from "lodash";
import axios from "axios";
import { paths } from "src/routes/paths"
import { sendGet, sendDelete, sendPost, sendPatch } from "src/helpers/requestHelper";


const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getAllInvoices() {
    const url = `${baseUrl}/api/invoices`;
    return sendGet(url, []);
}

export async function getAllOperationInvoices() {
    const url = `${baseUrl}/Invoices`;
    return sendGet(url, []);
}

export async function getNeedToAction() {
    const url = `${baseUrl}/Invoices/need-to-action`;
    return sendGet(url, []);
}

export async function getRejectBySales() {
    const url = `${baseUrl}/Invoices/reject-by-sales`;
    return sendGet(url, []);
}

export async function getInvoicesByDepartment(id) {
    const url = `${baseUrl}/api/Invoices/Department/${id}`;
    return sendGet(url, []);
}

export async function getInvoicesBySalesConfirmation(confirmStatus) {
    const url = confirmStatus 
        ? `${baseUrl}/api/Invoices/GetInvoicesBySalesConfirmation?salesConfirm=${confirmStatus}`
        : `${baseUrl}/api/Invoices/NotConfirmedBySales`;
    return sendGet(url, []);
}

export async  function getInvoicesById(id) {
    const url = `${baseUrl}/api/invoices/${id}`;
    return sendGet(url, {});    
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
    const url = `${baseUrl}/api/CollectionData`;
    return sendGet(url, []); 
}

export async function getInvoiceInquiryData(id) {
    const url = `${baseUrl}/api/Invoices/${id}/Inquiry`;
    return sendGet(url, {}); 
}

export async function getInvoiceForCustomers(customers) {
    if(!customers)
        return [];
    const queryData = customers.reduce((acc, customer) => `${acc},${customer}`, '') || "";
    const url = `${baseUrl}/api/Invoices/GetInvoicesForCustomers?customerIds=${queryData.substring(1)}`;
    return sendGet(url, []); 
}

export async function deleteInvoice(id) {
    const url = `${baseUrl}/api/Invoices/${id}/Delete`;
    return sendPatch(url); 
}

export async function createInvoice(body) {
    const url = `${baseUrl}/api/Invoices`;

    const responseObj = {
        success: true,
        errorMessage: ""
    };

    const response = await sendPost(url, body);

    responseObj.errorMessage = response;
    responseObj.success = !response;

    return responseObj;
}

export async function editInvoice(id, departmentId, body) {

    const url = getInvoiceEditUrl(departmentId, id);

    const responseObj = {
        success: true,
        errorMessage: ""
    };

    const response = await sendPatch(url, body);

    responseObj.errorMessage = response;
    responseObj.success = !response;

    return responseObj;
}

export async function addAttachment(id, formData) {
    const url = `${baseUrl}/api/Attachments/${id}`;
    const headers = {
        'Content-Type': 'multipart/form-data',
    };
    return sendPost(url, formData, headers);
}

export async function importInvoices(formData) {
    const url = `${baseUrl}/api/ExcelImport/import-invoices`;
    const headers = {
        'Content-Type': 'multipart/form-data',
    };
    return sendPost(url, formData, headers);
}

