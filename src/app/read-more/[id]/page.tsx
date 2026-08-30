import type { Metadata } from "next";
import { notFound } from "next/navigation";
import blogPostsData from "@/data/blogPosts.json";
import { ReadMoreInsights, type BlogPost } from "@/views/Insights/ReadMoreInsights";

const blogPosts = blogPostsData.blogPosts as unknown as BlogPost[];

function findPost(id: string) {
  return blogPosts.find((post) => post.id === Number.parseInt(id, 10));
}

export async function generateMetadata({ params }: PageProps<"/read-more/[id]">): Promise<Metadata> {
  const { id } = await params;
  const post = findPost(id);

  if (!post) {
    return {
      title: "Insights and News | 8thGear Hub",
      description: "8thGear Hub insights and news.",
    };
  }

  return {
    title: `${post.title} | 8thGear Insights`,
    description: post.fullcontent.introText1 ?? post.fullcontent.introductionTitle,
  };
}

export default async function Page({ params }: PageProps<"/read-more/[id]">) {
  const { id } = await params;
  const post = findPost(id);

  if (!post) {
    notFound();
  }

  return <ReadMoreInsights post={post} />;
}
