export const signupT = teacher => {
    return fetch(`http://localhost:9090/signupT`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(teacher)
    })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .catch(err => console.log(err))
    
};
export const signinT = teacher => {
    return fetch(`http://localhost:9090/signinT`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(teacher)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
    
};

export const authenticate=(jwt, next)=> {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(jwt))
        next();
    }
}
export const signoutT = (next) => {
    if (typeof window !== "undefined")
        localStorage.removeItem("jwt")
        next()
    return fetch(`http://localhost:9090/signoutT`, {
        method: "GET"
    })
        .then(response => {
            console.log('signout', response)
            return response.json()
    
        })
        .catch(err => console.log(err))
    
};

export const isAuthenticatedT = () => {
    if (typeof window == "undefined") {
        return false
    }
    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"))
    } else {
        return false
    }
};