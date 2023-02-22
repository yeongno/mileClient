import axios from "axios";
import instance from "../../axios";
import { POSTNOTICE_GET, POST_GET, POST_GO, POST_ONEGET } from "./types";
const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
const URL = `${PROXY}/api/posts/getPost`;
export function postGo(dataToSubmit1) {
  const request = instance
    .post("/api/posts/post", dataToSubmit1)
    .then((response) => response.data);

  return {
    type: POST_GO,
    payload: request,
  };
}

/**
 * 해당하는 토픽으로 글 목록을 가져온다.
 * @param {topic:"string"}
 * @returns posts
 */
export function getPost(dataToSubmit1) {
  const request = instance
    .post(URL, dataToSubmit1)
    .then((response) => response.data);

  return {
    type: POST_GET,
    payload: request,
  };
}
export function getNotice(dataToSubmit1) {
  const request = instance
    .post("/api/posts/getPost", dataToSubmit1)
    .then((response) => response.data);

  return {
    type: POSTNOTICE_GET,
    payload: request,
  };
}
/**
 * postId로 해당 게시물을 가져온다.
 * @param {_id:postFrom} dataToSubmit1
 * @returns posts
 */
export function getOnePost(dataToSubmit1) {
  const request = instance
    .post("/api/posts/getOnePost", dataToSubmit1)
    .then((response) => response.data);

  return {
    type: POST_ONEGET,
    payload: request,
  };
}
