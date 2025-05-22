import { baseUrl } from "./baseUrl/url.js";
import { headerSaveToken, headerEncrypt } from './headers/header.js';
import { urlRef, testingToken } from '../utils/constant.js';
import { sendPostx } from './../utils/http-axios-helpers.js';
import { bodyRegistEncrypt, bodyToken } from './../utils/body-helpers.js';

async function registEncrypt(userIndex){
    const envArg = process.argv.find(arg => arg.startsWith('--env='))
    const env = envArg ? envArg.split('=')[1] : 'dev1'

    const url = baseUrl(env)
    const body = bodyRegistEncrypt(env)

    try {
        const res = await sendPostx(`${url}/fdn-sso-v3/v1/authorization/register/complete-account?url_referrer=${urlRef}&testing_token=${testingToken}`, body, headerEncrypt);
        console.log(`User ${userIndex} registered successfully! Token:`, JSON.stringify(res.data.token));
        
        const userData = bodyToken(res.data.token, res.data.phone_number, env);

        // Save token and phone_number to database
        const localUrl = baseUrl('local');
        const getTokenResponse = await sendPostx(`${localUrl}/save-token`, userData, headerSaveToken);
        console.log(JSON.stringify(getTokenResponse.message));
    } catch(err) {
        console.error(`Failed to register User ${userIndex}: `, err);
    }
}

async function runRegistrations(countUser) {
    for (let i = 1; i <= countUser; i++) {
        console.log(`User ${i}:`);
        await registEncrypt(i);
        console.log('------------------------------------');
    }
}

// Define how many user on param
runRegistrations(1);