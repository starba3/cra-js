
export async function getAllCustomers() {
    let list = [];
    await fetch('https://invoicecollectionsystemapi.azurewebsites.net/customer', {
        mode:'cors'
    })
    .then(result => result.json())
    .then(invoices => {
        list = invoices;
    })
    .catch(error => console.log())

    return list

}

export async function GetAllCustomersWithAll() {

    const list = [{
        "id": "0",
        "customerCode": "All",
        "customerNameEn": "All",
        "customerNameAr": "All",
    }];
    await fetch('https://invoicecollectionsystemapi.azurewebsites.net/customer', {
        mode:'cors'
    })
    .then(result => result.json())
    .then(invoices => {

        // Add all invoices to the list
        list.push(...invoices);
    })
    .catch(error => console.log())
    console.log('List: '. list);
    return list

}

export async function getSalesPersonList() {
    let list = []
    await fetch('https://invoicecollectionsystemapi.azurewebsites.net/api/User/UsersNameByRole/sales', {
        mode:'cors'
    })
    .then(result => result.json())
    .then(invoices => {
        list = invoices
    })
    .catch(error => console.log())

    return list

}
