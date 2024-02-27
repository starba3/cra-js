import { sendGet, sendDelete, createBaseUrlWithRole, sendPostPatchRequest } from "src/helpers/requestHelper";

export async function sendForgetPasswordRequest(body, role = "guest") {
    const url = `${createBaseUrlWithRole(role)}/forget-password`
    return sendPostPatchRequest("post", url, body, {})
}

export async function sendResetPasswordRequest(body, role = "guest") {
    const url = `${createBaseUrlWithRole(role)}/reset-password`
    return sendPostPatchRequest("post", url, body, {})
}