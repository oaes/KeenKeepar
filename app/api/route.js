import friends from "@/data/friends.json";

export async function GET() {
  return Response.json(friends);
}