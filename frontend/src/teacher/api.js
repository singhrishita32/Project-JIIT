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
    //console.log(groupId)
    return fetch(`http://localhost:9090/groupBy/${groupId}` , {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const updateGroup = (groupId, group) => {
    //console.log(group);
    return fetch(`http://localhost:9090/update/group/${groupId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type":"application/json"
        },
        body:JSON.stringify(group)
    })
        .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}
