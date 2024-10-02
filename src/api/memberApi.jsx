import {BOARD, MEMBER} from "./config.js";
import axios from "axios";

export const postLogin = async (loginParam) => {
  const header = {headers: {"Content-Type": "x-www-form-urlencoded"}}
  const form = new FormData()
  form.append('username', loginParam.email)
  form.append('password', loginParam.password)

  const res = await axios.post(`${MEMBER}/login`, form, header)

  return res.data
}

export const postJoin = async (memberParam) => {
  const header = {headers: {'Content-Type': 'multipart/form-data'}}
  const res = await axios.post(`${MEMBER}/join`, memberParam, header)
  return  res.data
}

