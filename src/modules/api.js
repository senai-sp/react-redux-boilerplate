import queryString from "query-string";
const API_URL = (__PROD__) ? "http://localhost/" : "https://private-f0cf3-tweet.apiary-mock.com/";

const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};

function request( url , method = "GET", body){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if (localStorage.getItem('authToken')) {
        headers.append('Authorization', `Bearer ${localStorage.getItem('authToken')}`);
    }
    return fetch(`${API_URL}${url}`, {
            method,
            body: JSON.stringify(body),
            headers,
        })
        .then(res => handleErrors(res))
        .then(res => res.json())
        .catch((err) => {
            throw Error(err);
        });
}

export const requestGet = (url, search) => {
    if (search)
        url += queryString.stringify(search);
    return request(url, "GET");
};

export const requestPost = (url, data) => {
    return request(url, "POST", data);
};

export const requestDelete = (url, data) => {
    return request(url, "DELETE", data);
};

export const requestPut = (url, data) => {
    return request(url, "PUT", data);
};
