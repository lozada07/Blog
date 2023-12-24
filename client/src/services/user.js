import { BACKEND_URL, getToken } from "../config";

export const login = async (data) => {
  const res = await fetch(`${BACKEND_URL}/api/v1/auth/login`, {
    method: "POST",
    mode: 'no-cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const signUp = async (data) => {
  const res = await fetch(`${BACKEND_URL}/api/v1/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const updateUser = async (data) => {
  const res = await fetch(`${BACKEND_URL}/api/v1/user`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${getToken()} `,
    },
    body: data,
  });
  return await res.json();
};
