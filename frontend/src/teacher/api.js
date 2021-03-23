export const list = () => {
    return fetch(`http://localhost:9090/allGroups` , {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const load = (groupId) => {
    console.log(groupId)
    return fetch(`http://localhost:9090/groupBy/${groupId}` , {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}
