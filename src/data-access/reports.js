import { paths } from "src/routes/paths"

const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getAgingReport() {
    let list = []
    await fetch(`${baseUrl}/api/Reports/aging`, {
        mode:'cors'
    })
    .then(result => result.json())
    .then(invoices => {
        list = invoices
    })
    .catch(error => console.log())

    return list
}