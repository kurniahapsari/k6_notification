import http from 'k6/http'
import { check, fail } from 'k6'

export function sendPost(url, body, header = {}, expectedStatus = 200) {
    // Log request details
    console.log('POST Request Details:', url);

    const res = http.post(url, JSON.stringify(body), { headers:header });

    if (!check(res, { [`response status is ${expectedStatus}`]: (r) => r.status === expectedStatus })) {
        fail(`POST ${url} failed with status ${res.status}`);
    }
    return res;
}

export function sendGet(url, header={}) {
    console.log('GET Request Details:', url);

    const res = http.get(url, { headers:header })

    if (!check(res, {'response status is 200' : (r) => r.status === 200})) {
        fail(`GET ${url} failed with status ${res.status}`)
    }
    return res
}