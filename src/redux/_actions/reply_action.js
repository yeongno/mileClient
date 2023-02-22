import axios from "axios";
import instance from "../../axios";
import { REPLY_GET, REPLY_SET } from "./types";

/**
 * setting repling the massage on reducer
 * @param {{body}} dataToSubmit1
 * @returns
 */
export function setReply(dataToSubmit1) {
  const request = instance
    .post("/api/reply/setReply", dataToSubmit1)
    .then((response) => response.data);

  return {
    type: REPLY_SET,
    payload: request,
  };
}

/**
 * getting repling the massage on reducer
 * @param {{postFrom:PostId}} dataToSubmit1
 * @returns
 */
export function getReply(dataToSubmit1) {
  const request = instance
    .post("/api/reply/getReply", dataToSubmit1)
    .then((response) => response.data);

  return {
    type: REPLY_GET,
    payload: request,
  };
}
