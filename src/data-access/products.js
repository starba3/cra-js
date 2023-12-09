const baseUrl = 'https://invoicecollectionsystemapi.azurewebsites.net';

export async function getAllProducts() {
    let list = [];
    await fetch(`${baseUrl}/Product`, {
        mode:'cors'
    })
    .then(result => result.json())
    .then(invoices => {
        list = invoices;
    })
    .catch(error => console.log())

    return list

}
export async function deleteProduct(id) {
    let success = true;
    await fetch(`${baseUrl}/Product/${id}/Delete`, {
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

