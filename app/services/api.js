export async function getDoctors() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/classes/Doctor`, {
    headers: {
      'X-Parse-Application-Id': process.env.BACK4APP_APP_ID,
      'X-Parse-REST-API-Key': process.env.BACK4APP_API_KEY,
    },
  });
  const data = await res.json();
  return data.results;
}
