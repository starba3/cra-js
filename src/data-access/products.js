import axios from "axios";
import { sendGet, sendDelete, sendPost, sendPatch } from "src/helpers/requestHelper";

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getAllProducts() {
    let list = [];
    const url = `${baseUrl}/Product`;

    list = await sendGet(url, list);
    return list;
}

export async function deleteProduct(id) {
    const url = `${baseUrl}/Product/${id}/Delete`;
    return sendDelete(url);
}

export async  function getProductById(id) {
    let product = {};
    const url = `${baseUrl}/Product/${id}`;

    product = await sendGet(url, {}, product);
    return product; 
}

export async function createProduct(body) {
    const url = `${baseUrl}/Product`;
    const responseObj = {
        success: true,
        errorMessage: ""
    }

    const response = await sendPost(url, body);
    responseObj.errorMessage = response;
    responseObj.success = !response;

    return responseObj;
}

export async function editProduct(id, body) {
    const url = `${baseUrl}/Product/${id}`;
    const responseObj = {
        success: true,
        errorMessage: ""
    }

    const response = await sendPatch(url, body);
    responseObj.errorMessage = response;
    responseObj.success = !response;

    return responseObj;
}