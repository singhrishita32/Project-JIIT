export const createGroup = group => {
    return fetch(`http://localhost:9090/group/new`, {
        method: "POST",
        headers: {
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(group)
    })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .catch(err => console.log(err))
    
};