import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from "./types";
import { USER_SERVER } from "../../config/ServerConfig";
import instance from "../../axios";
export function loginUser(dataToSubmit) {
  const request = instance
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}
export function registerUser(dataToSubmit) {
  const request = instance
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const request = instance
    .get(`${USER_SERVER}/auth`)
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function logout() {
  const request = instance
    .get(`${USER_SERVER}/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}
