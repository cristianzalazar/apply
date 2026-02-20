import { httpGet } from "./http";

export function getPositions() {
    return httpGet("jobs/get-list");
}