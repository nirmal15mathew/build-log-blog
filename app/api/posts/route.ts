import { getAllPosts } from "@/app/lib/firebase"

export async function GET() {
  const res = await getAllPosts()
 
  return Response.json({ res })
}