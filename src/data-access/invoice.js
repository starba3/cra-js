
// import { result } from "lodash";
import axios from "axios";
import { paths } from "src/routes/paths"
import { sendGet, sendDelete, sendPost, sendPatch, createBaseUrlWithRole, createHeaders, sendPostPatchRequest } from "src/helpers/requestHelper";


const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';
const STORAGE_KEY = 'accessToken';


export async function getAllInvoices(role = "Operation") {
    const url = `${createBaseUrlWithRole(role)}/Invoices`;
    const headers = createHeaders(role)

    return sendGet(url, [], headers);
}

export async function getNeedToAction(role) {
    const url = `${createBaseUrlWithRole(role)}/Invoices/need-to-action`
    const headers = createHeaders(role)

    return sendGet(url, [], headers);
}

export async function getNeedToAssignEngineer(role) {
    const url = `${createBaseUrlWithRole(role)}/Invoices/need-to-assign`
    const headers = createHeaders(role)

    return sendGet(url, [], headers);
}

export async function getInvoiceAcceptence(role) {
    const url = `${createBaseUrlWithRole(role)}/Invoices/confirm-reject-invoices`
    const headers = createHeaders(role)

    return sendGet(url, [], headers);
}

export async function confirmRejectInvoice(body, role) {
    const url = `${createBaseUrlWithRole(role)}/Confirmation/Invoices`
    const headers = createHeaders(role)

    const response = await sendPatch(url, body, headers);

    const responseObj = {
        success: !response,
        errorMessage: response // Empty in successful request
    };

    return responseObj;
}

export async function setInvoiceEnginneer(body, role) {
    const url = `${createBaseUrlWithRole(role)}/Invoices/set-engineer`
    const headers = createHeaders(role)

    const response = await sendPatch(url, body, headers);

    const responseObj = {
        success: !response,
        errorMessage: response // Empty in successful request
    };

    return responseObj;
}

export async function getRejectBySales(role) {
    const url = `${createBaseUrlWithRole(role)}/Invoices/reject-by-sales`;
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

export async  function getInvoicesById(id, role) {
    // const url = `${createBaseUrlWithRole(role)}/Invoices/${id}`;
    const url = `${baseUrl}/api/Operation/Invoices/${id}`;
    // const headers = createHeaders(role)

    return sendGet(url, {});    
}

function getInvoiceEditUrl(departmentId, invoiceId, role) {

    let url = ''
    if (departmentId === 0) {
        // Operation
        url = `${createBaseUrlWithRole(role)}/Invoice/${invoiceId}` 
    }
    else {
        // Other departments
        url = `${createBaseUrlWithRole(role)}/Invoices/${invoiceId}` 
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

export async function createInvoice(body, role = "Operation") {
    const url = `${createBaseUrlWithRole(role)}/Invoices`;

    const responseObj = {
        success: true,
        errorMessage: ""
    };

    const response = await sendPost(url, body);

    responseObj.errorMessage = response;
    responseObj.success = !response;

    return responseObj;
}

export async function sendInvoiceAlert(body, role = "Operation") {
    const url = `${createBaseUrlWithRole(role)}/Invoices/alert-others`;
    
    return sendPostPatchRequest("patch", url, body)
}

export async function editInvoice(id, departmentId, body, role) {

    const url = getInvoiceEditUrl(departmentId, id, role);

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

