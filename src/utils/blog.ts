import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/app/(main)/blog/posts");

export interface BlogPost {
  slug: string;
  title: string;
  publishedAt: string;
  image: string;
  summary: string;
  category: string;
  author: string;
  authorAvatar: string;
  content: string;
  featured?: boolean;
}

export function getAllPosts(): BlogPost[] {
  try {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.warn("Posts directory does not exist:", postsDirectory);
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map<BlogPost | null>((fileName) => {
        try {
          const slug = fileName.replace(/\.mdx$/, "");
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, "utf8");
          const { data, content } = matter(fileContents);

          return {
            slug,
            title: data.title || "Untitled",
            publishedAt: data.publishedAt || new Date().toISOString(),
            image: data.image || "/images/og/home.jpg",
            summary: data.summary || "",
            category: data.category || "Uncategorized",
            author: data.author || "Unknown",
            authorAvatar: data.authorAvatar || "/images/og/home.jpg",
            content,
            featured: data.featured || false,
          };
        } catch (error) {
          console.error(`Error reading post ${fileName}:`, error);
          return null;
        }
      })
      .filter((post): post is BlogPost => post !== null);

    // Sort posts: featured first, then by date
    return allPostsData.sort((a, b) => {
      // Featured posts come first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      
      // Then sort by date
      if (a.publishedAt < b.publishedAt) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error("Error in getAllPosts:", error);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      publishedAt: data.publishedAt,
      image: data.image,
      summary: data.summary,
      category: data.category,
      author: data.author,
      authorAvatar: data.authorAvatar,
      content,
      featured: data.featured || false,
    };
  } catch (error) {
    return null;
  }
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.category));
  return ["Todos", ...Array.from(categories)];
}
