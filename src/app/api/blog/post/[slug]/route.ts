import { NextResponse } from "next/server";
import { getPostBySlug, getAllPosts } from "@/utils/blog";

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    const post = getPostBySlug(slug);

    if (!post) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    // Get related posts (same category, excluding current post)
    const allPosts = getAllPosts();
    const relatedPosts = allPosts
      .filter(p => p.category === post.category && p.slug !== post.slug)
      .slice(0, 4);

    return NextResponse.json({
      post,
      relatedPosts,
    });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
