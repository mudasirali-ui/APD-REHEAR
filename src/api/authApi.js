import { apiUrl } from './config.js';

const TOKEN_KEY = 'rehear_token';

export function getStoredToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setStoredToken(token) {
  if (token) localStorage.setItem(TOKEN_KEY, token);
  else localStorage.removeItem(TOKEN_KEY);
}

async function handleJson(res) {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg =
      typeof data.error === 'string'
        ? data.error
        : res.statusText || 'Request failed';
    const err = new Error(msg);
    err.code = data.code;
    err.status = res.status;
    throw err;
  }
  return data;
}

export async function signup({ name, email, password }) {
  const res = await fetch(apiUrl('/api/auth/signup'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });
  return handleJson(res);
}

export async function login({ email, password }) {
  const res = await fetch(apiUrl('/api/auth/login'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return handleJson(res);
}

export async function fetchMe(token) {
  const res = await fetch(apiUrl('/api/auth/me'), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return handleJson(res);
}
