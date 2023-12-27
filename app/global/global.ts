// Trong một tệp .ts hoặc .tsx
export const baseURL: string = process.env.VITE_STRAPI_URL || '';

export const baseAPI: string = `${baseURL}/api`;

export const APIToken: string = process.env.VITE_API_TOKEN || '';

export const APITokenInHeader = {
  headers: {
    Authorization: `Bearer ${APIToken}`,
  },
};

export const BACKEND_URL: string = process.env.VITE_BACKEND_URL || '';
export const LINE_WEB_HOOK_URL: string = process.env.VITE_LINE_WEB_HOOK_URL || '';

import axios from "axios";

export const axiosForStrapi = axios.create({
  withCredentials: false,
});

export type JwtType = {
  exp: number;
  iat: number;
  id: string;
};
