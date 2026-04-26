// ============================================
// REHEAR — Master Backend API Connection
// ============================================

const BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID || 'rehear';

// Standard headers for every request
const headers = {
  'Content-Type': 'application/json',
  'x-project-id': PROJECT_ID
};

// ─────────────────────────────────────────
// AUTH
// ─────────────────────────────────────────

// Signup
export const signup = async ({ name, email, password }) => {
  const res = await fetch(`${BASE}/api/auth/signup`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ name, email, password })
  });
  return res.json();
};

// Login
export const login = async ({ email, password }) => {
  const res = await fetch(`${BASE}/api/auth/login`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, password })
  });
  return res.json();
};

// Logout
export const logout = async (token) => {
  const res = await fetch(`${BASE}/api/auth/logout`, {
    method: 'POST',
    headers: { ...headers, Authorization: `Bearer ${token}` }
  });
  return res.json();
};

// ─────────────────────────────────────────
// CONTACT FORM
// ─────────────────────────────────────────

export const submitContact = async (formData) => {
  const res = await fetch(`${BASE}/api/contact/submit`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      subject: formData.subject || '',
      message: formData.message
    })
  });
  return res.json();
};
