import { httpPost } from "./http";

export function createApplication(payload) {
    return httpPost("candidate/apply-to-job", payload);
}