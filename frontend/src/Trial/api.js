export const createTrial = (trial) => {
    return fetch(`http://localhost:9090/trial/new`, {
        method: "POST",
        headers: {
            Accept: "applicatipon/json"
        },
        body:trial
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}
export const list = () => {
    return fetch(`http://localhost:9090/trial/get` , {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}