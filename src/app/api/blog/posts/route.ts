import { NextResponse } from "next/server";
import { getAllPosts, getAllCategories } from "@/utils/blog";

export async function GET() {
  try {
    const posts = getAllPosts();
    const categories = getAllCategories();

    return NextResponse.json({
      posts,
      categories,
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { posts: [], categories: ["Todos"] },
      { status: 500 }
    );
  }
}
