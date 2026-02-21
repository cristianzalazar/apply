import {httpGet} from "./http";

export function getCandidate(email) {
    return httpGet("candidate/get-by-email?email=" + "crizstian5@gmail.com");
}