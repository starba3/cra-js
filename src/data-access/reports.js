import { sendGet, createBaseUrlWithRole } from "src/helpers/requestHelper";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getAgingReport() {
    const url = `${baseUrl}/api/Reports/aging`;
    return  sendGet(url, []);
}

export async function getPerformanceReport(role = "Head of engineer") {
    const url = `${createBaseUrlWithRole(role)}/Reports/engineer-performance`;
    return  sendGet(url, []);
}

export async function getCollectorPerformanceReport(role = "Head of collectors") {
    const url = `${createBaseUrlWithRole(role)}/Reports/colletor-performance`;
    return  sendGet(url, []);
}

export async function getSalesPerformanceReport(role = "Head of Sales") {
    const url = `${createBaseUrlWithRole(role)}/Reports/sales-performance`;
    return  sendGet(url, []);
}

export async function getGmReport(source) {
    const url = `${baseUrl}/api/Reports/GmReport?collection=${source}`;
    return  sendGet(url, []);
}

export async function getGmReasonReport(source, status) {
    const url = `${baseUrl}/api/Reports/GmReasonReport?collection=${source}&status=${status}`;
    return  sendGet(url, []);
}

export async function getInvoicesForCollector(id, role = "head of collectors") {
    const url = `${createBaseUrlWithRole(role)}/Reports/invoices/colletor?CollectorId=${id}`;
    return sendGet(url, []);
}