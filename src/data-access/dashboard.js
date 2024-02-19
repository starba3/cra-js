import { sendGet, createBaseUrlWithRole, createHeaders } from "src/helpers/requestHelper";

export async function getDashboardData(role) {
    const url = `${createBaseUrlWithRole(role)}/Dashboard`;
    const headers = createHeaders(role);

    return  sendGet(url, {}, headers);
}

export async function getInstallationStatusCount(role) {
    const url = `${createBaseUrlWithRole(role)}/dashboard/installation-status-count`;
    const headers = createHeaders(role);

    return  sendGet(url, {}, headers);  
}

export async function getNeedToActionCount(role) {
    const url = `${createBaseUrlWithRole(role)}/dashboard/count-needing-action`;
    const headers = createHeaders(role);

    return  sendGet(url, {}, headers);
}