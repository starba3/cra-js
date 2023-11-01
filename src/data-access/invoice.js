

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

export async function getInvoicesByDepartment(id) {
    let list = []
    await fetch(`https://invoicecollectionsystemapi.azurewebsites.net/api/Invoices/Department/${id}`, {
        mode:'cors'
    })
    .then(result => result.json())
    .then(invoices => {
        list = invoices
    })
    .catch(error => console.log())

    return list
}

export async function getInvoicesBySalesConfirmation(confirmStatus) {
    let list = []
    await fetch(`https://invoicecollectionsystemapi.azurewebsites.net/api/Invoices/GetInvoicesBySalesConfirmation?salesConfirm=${confirmStatus}`, {
        mode:'cors'
    })
    .then(result => result.json())
    .then(invoices => {
        list = invoices
    })
    .catch(error => console.log())

    return list
}

export async  function getInvoicesById(id) {
    try {
        const response = await fetch(`https://invoicecollectionsystemapi.azurewebsites.net/api/invoices/${id}`, {
            mode: 'cors'
        });

        if (response.ok) {
            const invoice = await response.json();
            return invoice;
        } 
            // Handle non-successful response here if needed.
            console.error(`Failed to fetch invoice: ${response.status} - ${response.statusText}`);
        
    } catch (error) {
        console.error(error);
    }

    return {}; // Return an empty object by default or handle errors as needed.
    
}
