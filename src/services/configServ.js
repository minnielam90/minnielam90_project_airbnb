import axios from "axios";
import { getLocalStore } from "../user/api/localUser";

const tokenUser = getLocalStore("user_info");
const token = tokenUser ? tokenUser.token : null;

export const https = axios.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn",

  timeout: 15000,
  headers: {
    TokenCyberSoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2OSIsIkhldEhhblN0cmluZyI6IjMxLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczODI4MTYwMDAwMCIsIm5iZiI6MTcxMDUyMjAwMCwiZXhwIjoxNzM4NDI5MjAwfQ.bsAaudu2iAsJe1QzbsWWy0HG7ofC_8rFKL-MG_jW1ig",
    token: token || "",
  },
});
