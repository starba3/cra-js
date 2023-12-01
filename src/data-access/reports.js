import { paths } from "src/routes/paths"

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getAgingReport() {
    let list = []
    await fetch(`${baseUrl}/api/Reports/aging`, {
        mode:'cors'
    })
    .then(response => response.json())
    .then(res => {
        list = res;
    })
    .catch(error => console.log())

    return list
}

export async function getGmReport(source) {
    let list = []
    await fetch(`${baseUrl}/api/Reports/GmReport?collection=${source}`, {
        mode:'cors'
    })
    .then(response => response.json())
    .then(res => {
        list = res;
    })
    .catch(error => console.log())

    return list
}

export async function getGmReasonReport(source, status) {
    let list = []
    await fetch(`${baseUrl}/api/Reports/GmReasonReport?collection=${source}&status=${status}`, {
        mode:'cors'
    })
    .then(response => response.json())
    .then(res => {
        list = res;
    })
    .catch(error => console.log())

    return list
}