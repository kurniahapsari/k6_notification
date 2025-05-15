import { sendPost } from "../../utils/http-helpers.js";
import { sendGet } from "../../utils/http-helpers.js";
import { notifBody } from "../../utils/body-helpers.js";
import { baseUrl } from "../baseUrl/url.js";
import { headerNotif, headerGetToken } from "../headers/header.js";

export function postNotif(){
    const localUrl = baseUrl('local')
    const getTokenResponse = sendGet(`${localUrl}/get-token`);
    const tokenData = getTokenResponse.json()
    const token = tokenData.token
    const forHeader = headerNotif(token)

    const environment = __ENV.env || 'dev'
    const url = baseUrl(environment)

    const body = notifBody()

    const res = sendPost(`${url}/fdn-client-notification/v3/notification`, body, forHeader)
    console.log('Get detail postman response: ', res.json())
    return res
}