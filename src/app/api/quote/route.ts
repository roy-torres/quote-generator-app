import { pickQuote } from "@/lib/quotes";

export function GET(request: Request) {
  const avoid = new URL(request.url).searchParams.get("avoid");
  return Response.json(pickQuote(avoid), {
    headers: { "Cache-Control": "no-store" },
  });
}
