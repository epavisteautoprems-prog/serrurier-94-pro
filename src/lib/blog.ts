import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPostMeta = {
  title: string;
  description: string;
  date: string; // ISO
  slug: string;
  keywords: readonly string[];
  author?: string;
};

export type BlogPost = {
  meta: BlogPostMeta;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export function getAllPostSlugs(): readonly string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);

  const data = parsed.data as Partial<BlogPostMeta>;
  if (!data.title || !data.description || !data.date) {
    throw new Error(`Invalid frontmatter in ${slug}.mdx`);
  }

  return {
    meta: {
      title: data.title,
      description: data.description,
      date: data.date,
      slug,
      keywords: Array.isArray(data.keywords) ? (data.keywords as string[]) : [],
      author: typeof data.author === "string" ? data.author : undefined,
    },
    content: parsed.content,
  };
}

