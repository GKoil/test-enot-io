const makeRequest = (
  url: string,
  headers: { [key: string]: string },
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
) => {
  return fetch(url, { method, headers });
};

export default makeRequest;
