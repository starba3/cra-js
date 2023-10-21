

export async function getAllInvoices() {
    let list = []
    await fetch('https://invoicecollectionsystemapi.azurewebsites.net/api/invoices', {
        mode:'cors'
    })
    .then(result => result.json())
    .then(invoices => {
        list = invoices
    })
    .catch(error => console.log())

    return list
}
