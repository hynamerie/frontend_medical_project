/// DELETE LATER

export async function logUser(creds) {
  const res = await fetch("api/login",
    { method: "post", body: JSON.stringify(creds)}
  );
  const data = await res.json();

  return data
}