async function get(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const err = new Error(`Request failed: ${res.status}`);
    err.status = res.status;
    throw err;
  }
  return res.json();
}

export const getProfile = (lang) => get(`/api/profile?lang=${lang}`);
export const getProjects = (lang) => get(`/api/projects?lang=${lang}`);
export const getProject = (slug, lang) => get(`/api/projects/${slug}?lang=${lang}`);

export function whatsappLink(number, text) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
