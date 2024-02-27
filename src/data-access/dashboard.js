import { sendGet, createBaseUrlWithRole } from "src/helpers/requestHelper";

export async function getDashboardData(role) {
    const url = `${createBaseUrlWithRole(role)}/Dashboard`;
    return  sendGet(url, {});
}

export async function getInstallationStatusCount(role) {
    const url = `${createBaseUrlWithRole(role)}/dashboard/installation-status-count`;
    return  sendGet(url, {});  
}

export async function getNeedToActionCount(role) {
    const url = `${createBaseUrlWithRole(role)}/dashboard/count-needing-action`;
    return  sendGet(url, {});
}