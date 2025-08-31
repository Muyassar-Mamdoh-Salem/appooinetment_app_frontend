const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchFromStrapi(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }
  return res.json();
}
