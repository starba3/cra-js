import { UserRoles } from "src/helpers/constantsHelper";
import { sendGet, createBaseUrlWithRole } from "src/helpers/requestHelper";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getAgingReport() {
    const url = `${baseUrl}/api/Reports/aging`;
    return  sendGet(url, []);
}

export async function getPerformanceReport(role = UserRoles.headOfEngineer) {
    const url = `${createBaseUrlWithRole(role)}/Reports/engineer-performance`;
    return  sendGet(url, []);
}

export async function getCollectorPerformanceReport(role = UserRoles.headOfCollector) {
    const url = `${createBaseUrlWithRole(role)}/Reports/colletor-performance`;
    return  sendGet(url, []);
}

export async function getSalesPerformanceReport(role = UserRoles.headOfSales) {
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

export async function getInvoicesForCollector(id, role = UserRoles.headOfCollector) {
    const url = `${createBaseUrlWithRole(role)}/Reports/invoices/colletor?CollectorId=${id}`;
    return sendGet(url, []);
}

export async function getInvoicesForSales(id, role = UserRoles.headOfSales) {
    const url = `${createBaseUrlWithRole(role)}/Reports/invoices/salesman?SalesId=${id}`;
    return sendGet(url, []);
}