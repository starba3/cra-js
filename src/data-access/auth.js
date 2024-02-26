import { sendGet, sendDelete, createBaseUrlWithRole, sendPostPatchRequest, createHeaders } from "src/helpers/requestHelper";

export async function sendForgetPasswordRequest(body, role = "guest") {
    const url = `${createBaseUrlWithRole(role)}/forget-password`
    const headers = createHeaders(role)

    return sendPostPatchRequest("post", url, body, headers)
}

export async function sendResetPasswordRequest(body, role = "guest") {
    const url = `${createBaseUrlWithRole(role)}/reset-password`
    const headers = createHeaders(role)

    return sendPostPatchRequest("post", url, body, headers)
}