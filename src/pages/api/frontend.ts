import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const res = await fetch("https://script.google.com/macros/s/AKfycbwhgzjzZN1JadluNhf7-Oe30Bjeek3hykwkuGUVrDBCbAEa_zMtJ3lb1mravqgRtijP/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const result = await res.text();

  return new Response(result, {
    headers: { "Content-Type": "application/json" },
  });
};
