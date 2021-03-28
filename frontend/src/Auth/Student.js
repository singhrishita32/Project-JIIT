export const signupS = student => {
    return fetch(`http://localhost:9090/signupS`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .catch(err => console.log(err))
    
};
export const signinS = student => {
    return fetch(`http://localhost:9090/signinS`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
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
export const signoutS = (next) => {
    if (typeof window !== "undefined")
        localStorage.removeItem("jwt")
        next()
    return fetch(`http://localhost:9090/signoutS`, {
        method: "GET"
    })
        .then(response => {
            console.log('signout', response)
            return response.json()
    
        })
        .catch(err => console.log(err))
    
};

export const isAuthenticatedS= () => {
    if (typeof window == "undefined") {
        return false
    }
    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"))
    } else {
        return false
    }
};