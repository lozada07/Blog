import { BACKEND_URL, getToken } from "../config";

export const getAllPosts = async (query) => {
  const q = query
  
  const res = await fetch(`${BACKEND_URL}/api/v1/posts?q=${q}`, {
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await res.json();
};

export const getUserPosts = async () => {
  const res = await fetch(`${BACKEND_URL}/api/v1/posts/user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getToken()} `,
    },
  });
  return await res.json();
};

export const getPost = async (id) => {
  const res = await fetch(`${BACKEND_URL}/api/v1/posts/${id}`);
  return await res.json();
};

export const createPost = async (data) => {
  const res = await fetch(`${BACKEND_URL}/api/v1/posts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()} `,
    },
    body: data,
  });
  return await res.json();
};

export const updatePost = async (data) => {
  const { formData, id } = data;

  const res = await fetch(`${BACKEND_URL}/api/v1/posts/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${getToken()} `,
    },
    body: formData,
  });
  return await res.json();
};

export const deletePost = async (id) => {
  const res = await fetch(`${BACKEND_URL}/api/v1/posts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()} `,
    },
  });
  return await res.json();
};
