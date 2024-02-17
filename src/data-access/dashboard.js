import { sendGet, createBaseUrlWithRole, createHeaders } from "src/helpers/requestHelper";

export async function getDashboardData(role) {
    const url = `${createBaseUrlWithRole(role)}/Dashboard`;
    const headers = createHeaders(role);

    return  sendGet(url, {}, headers);
}