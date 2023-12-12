const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getAllCustomers() {
    let list = [];
    await fetch(`${baseUrl}/customer`, {
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
    await fetch(`${baseUrl}/customer`, {
        mode:'cors'
    })
    .then(result => result.json())
    .then(invoices => {

        // Add all invoices to the list
        list.push(...invoices);
    })
    .catch(error => console.log())
    // console.log('List: '. list);
    return list

}

export async function getSalesPersonList() {
    let list = []
    await fetch(`${baseUrl}/api/User/UsersNameByRole/sales`, {
        mode:'cors'
    })
    .then(result => result.json())
    .then(invoices => {
        list = invoices
    })
    .catch(error => console.log())

    return list

}

export async  function getCustomerById(id) {
    try {
        const response = await fetch(`${baseUrl}/Customer/${id}`, {
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

export async function deleteCustomer(id) {
    let success = true;
    await fetch(`${baseUrl}/Customer/${id}/Delete`, {
        mode:'cors',
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        Cache: 'default'
    })
    .then(res => {
        // Check if the status code is 200 or 204
        if (res.ok) {
          // Check if the status code is 200 or 204
          if (res.status === 204) {
            return null; // Handle 204 No Content
          }  if (res.status === 200) {
            return res.json(); // Parse JSON for other successful responses
          } 

          throw new Error(`Unexpected status code: ${res.status}`);
          
        } 

        throw new Error('Network response was not ok');
      })
    .then(invoices => {
        console.log("Deleted successfuly")
    })
    .catch(error => {
        console.log(error) 
        success = false;
    })

    return success;
}