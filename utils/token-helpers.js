import { sendPost } from "./http-helpers.js";
import { sendGet } from "./http-helpers.js";
import { bodyToken } from "./body-helpers.js";
import { baseUrl } from "../src/baseUrl/url.js";
import { headerRefresh } from "../src/headers/header.js";


export function getToken(){
    const localUrl = baseUrl('local')
        
    // get token
    const getTokenResponse = sendGet(`${localUrl}/get-token`);
    const tokenData = getTokenResponse.json()
    const token = tokenData.token
    
    // refresh token
    const environment = __ENV.env || 'dev'
    const url = baseUrl(environment)
    const bodyRefresh = bodyToken(token)
    const ref = sendPost(`${url}/fdn-sso-v3/v1/authorization/refresh-token`, bodyRefresh, headerRefresh())
    console.log(token);
    return token
}