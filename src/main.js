import { minUser } from "./stages/stages-min.js";
import { maxUser } from "./stages/stages-max.js";
import { avgUser } from "./stages/stages-avg.js";
import { rampUp } from "./stages/stages-rampUp.js";
import { spike } from "./stages/stages-spike.js";
import { detailGet } from "./scenarios/get.js";
import { postNotif } from "./scenarios/post-notif.js";

export const options = minUser

export default function(){
    postNotif();
}