const BASE_URL = "https://betsol-assignment-api.smtg.vercel.app";
const fetcher = async (request) => {
  const token = localStorage.getItem("token");
  if (typeof request === "string") {
    request = new Request(BASE_URL + request);
  }
  if (token) {
    request.headers.append("authorization", `Bearer ${token}`);
  }
  const res = await fetch(request);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  const authHeader = res.headers.get("authorization");
  if (authHeader) {
    window.localStorage.setItem("token", authHeader);
  }
  return await res.json();
};

const post = async (endpoint, req) => {
  const request = new Request(BASE_URL + endpoint, {
    method: "POST",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(req),
  });

  return fetcher(request);
};

export { fetcher, post };
