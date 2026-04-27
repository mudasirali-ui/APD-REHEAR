const BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID || 'apd-rehear';

export const submitContact = async (formData) => {
  const data = new FormData();
  data.append('first_name', formData.firstName || formData.first_name || '');
  data.append('last_name', formData.lastName || formData.last_name || '');
  data.append('email', formData.email);
  data.append('phone', formData.phone || '');
  data.append('subject', formData.subject || '');
  data.append('message', formData.message || '');

  const res = await fetch(`${BASE}/api/contact/submit`, {
    method: 'POST',
    headers: { 'x-project-id': PROJECT_ID },
    body: data
  });
  return res.json();
};