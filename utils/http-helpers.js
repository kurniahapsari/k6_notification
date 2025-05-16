import http from 'k6/http'
import { check, fail } from 'k6'

export function sendPost(url, body, header = {}, expectedStatus = 200) {
    // Log request details
    console.log('POST Request Details:', url);
    // console.log('Headers:', JSON.stringify(header, null, 2));
    // console.log('Body:', JSON.stringify(body, null, 2));
    
    const res = http.post(url, JSON.stringify(body), { headers:header });
    
    if (!check(res, { [`response status is ${expectedStatus}`]: (r) => r.status === expectedStatus })) {
        fail(`POST ${url} failed with status ${res.status}`);
    }
    console.log('Status Code:', res.status);
    return res;
}

export function sendGet(url, header={}) {
    console.log('GET Request Details:', url);
    console.log('Headers:', JSON.stringify(header, null, 2));

    const res = http.get(url, { headers:header })

    if (!check(res, {'response status is 200' : (r) => r.status === 200})) {
        fail(`GET ${url} failed with status ${res.status}`)
    }
    console.log('Status Code:', res.status);
    return res
}

export function sendDelete(url, headers) {
    console.log('DEL Request Details:', url);
    console.log('Headers:', JSON.stringify(headers, null, 2));

    const res = http.del(url, null, { headers })

    if (!check(res, {'response status is 200' : (r) => r.status === 200})) {
        fail(`DELETE ${url} failed with status ${res.status}`)
    }
    return res
}