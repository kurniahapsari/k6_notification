import { baseUrl } from "./baseUrl/url.js";
import { headerSaveToken, headerEncrypt } from './headers/header.js';
import { urlRef, testingToken } from '../utils/constant.js';
import { sendPosts } from './../utils/http-native-helpers.js';
import { bodyRegistEncrypt, bodyToken } from './../utils/body-helpers.js';

export function registEncrypt(){
    const environment = process.env.env
    const url = baseUrl(environment)

    const body = bodyRegistEncrypt()

    const res = sendPosts(`${url}/fdn-sso-v3/v1/authorization/register/complete-account?url_referrer=${urlRef}&testing_token=${testingToken}`, body, headerEncrypt)
    console.log('Get detail response: ', res.json().data.token)
    const responseJson = res.json()
    if (responseJson.data && responseJson.data.token) {
        const token = bodyToken(responseJson.data.token)
        console.log('Token: ', JSON.stringify(token));

        // Save token to database
        const localUrl = baseUrl('local');
        const getTokenResponse = sendPosts(`${localUrl}/save-token`, token, headerSaveToken);
        console.log('Successfully add token: ', getTokenResponse.status);
    } else {
        console.error('Token not found in response');
    }
    return responseJson
}

for (let i = 1; i <= 3; i++) {
    console.log(`User ${i}: `);
    registEncrypt();
    console.log(`------------------------------------`);
}