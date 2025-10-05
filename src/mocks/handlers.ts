import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json([
      { name: "John Doe" },
      { name: "Jane Smith" },
      { name: "Alice Johnson" },
    ]);
  }),
];
