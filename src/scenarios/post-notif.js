import { sendPost } from "../../utils/http-helpers.js";
import { notifBody } from "../../utils/body-helpers.js";
import { getToken } from "../../utils/token-helpers.js";
import { baseUrl } from "../baseUrl/url.js";
import { headerNotif } from "../headers/header.js";

export function postNotif(){    
    const environment = __ENV.env || 'dev'
    const url = baseUrl(environment)
    const forHeader = headerNotif(getToken())
    const body = notifBody()

    const res = sendPost(`${url}/fdn-client-notification/v3/notification`, body, forHeader)
    console.log('Get detail response: ', res.json())
    return res
}