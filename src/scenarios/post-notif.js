import { sendPost } from "../../utils/http-helpers.js";
import { sendGet } from "../../utils/http-helpers.js";
import { notifBody, bodyToken } from "../../utils/body-helpers.js";
import { baseUrl } from "../baseUrl/url.js";
import { headerNotif, headerRefresh } from "../headers/header.js";

export function postNotif(){
    const localUrl = baseUrl('local')
    
    // get token
    const getTokenResponse = sendGet(`${localUrl}/get-token`);
    const tokenData = getTokenResponse.json()
    const token = tokenData.token
    
    // refresh token
    const bodyRefresh = bodyToken(token)
    const ref = sendPost(`${url}/v1/authorization/refresh-token`, bodyRefresh, headerRefresh())
    
    const environment = __ENV.env || 'dev'
    const url = baseUrl(environment)
    const forHeader = headerNotif(token)

    const body = notifBody()

    const res = sendPost(`${url}/fdn-client-notification/v3/notification`, body, forHeader)
    console.log('Get detail postman response: ', res.json())
    return res
}