"use client";

// Mirrors the CRA app's src/pages/Insights/insights.js (named export Insights).
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaTimes } from "react-icons/fa";
import insightsheroimg from "@/assets/images/insights/insights-hero-img.png";
import blog from "@/assets/images/insights/blog.png";
import dropdownicon from "@/assets/images/insights/dropdownicon.png";
import blogcard1 from "@/assets/images/insights/blogcard1.png";
import blogcard2 from "@/assets/images/insights/blogcard2.png";
import blogcard3 from "@/assets/images/insights/blogcard3.png";
import type { StaticImageData } from "next/image";

export const Insights = () => {
  return (
    <>
      <Hero />
      <Blog />
      <BlogSection />
    </>
  );
};

function Hero() {
  return (
    <section className="bg-[#920F84] py-8">
      <div className="mx-auto max-w-350 rounded-2xl bg-white px-4 py-10 shadow-brand-md sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h2 className="mb-3 font-heading text-2xl font-bold">Insights and News</h2>
            <p className="mx-auto max-w-[90%] lg:mx-0">
              At 8thGear Hub, we provide a wealth of insights through informed articles, news, and blogs on current
              developments in various topics, both locally and internationally.
            </p>
            <div className="my-4 flex justify-center lg:justify-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7C0C91]">
                <span className="text-xl text-white">↓</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
            <Image src={insightsheroimg} alt="Buildings" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

const categories = ["Blogs", "News", "Press Release", "Newsletter"];

function CategoriesList() {
  return (
    <ul className="list-none p-0">
      {categories.map((category) => (
        <li key={category} className="border-b border-grey-border py-2">
          {category}
        </li>
      ))}
    </ul>
  );
}

function Blog() {
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isCategoriesVisible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCategoriesVisible]);

  const toggleCategories = () => setIsCategoriesVisible((prev) => !prev);

  return (
    <div className="mx-auto max-w-350 px-4 pt-10">
      <div className="mb-4 max-w-125">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Type your search"
            className="w-full rounded-l-md border border-grey-border px-3 py-2 focus:outline-none"
          />
          <button
            type="button"
            className="rounded-r-md border border-l-0 border-grey-border px-3 text-secondary"
            aria-label="Search"
          >
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
        {/* Blogs hero card */}
        <div className="relative h-100 lg:col-span-8">
          <Image src={blog} alt="Building at night" fill className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-purple/80 via-purple/60 to-purple/0" />

          <button
            type="button"
            onClick={toggleCategories}
            className="absolute right-3 top-3 z-3 border-0 bg-transparent lg:hidden"
          >
            <Image src={dropdownicon} alt="Menu" width={30} height={30} className="h-7.5 w-7.5" />
          </button>

          <div className="absolute bottom-[3%] left-[5%] z-2 text-white">
            <h2 className="font-heading">Blogs</h2>
            <p>Here you can browse recent blog releases.</p>
          </div>
        </div>

        {/* Categories card for large screens */}
        <div className="hidden h-100 border-l border-grey-border bg-grey-bg p-5 lg:col-span-4 lg:block">
          <h3 className="mb-5 font-heading">Categories</h3>
          <CategoriesList />
        </div>

        {/* Mobile categories modal */}
        {isCategoriesVisible && (
          <div
            onClick={toggleCategories}
            className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 lg:hidden"
          >
            <div
              onClick={(event) => event.stopPropagation()}
              className="relative w-[90%] max-w-75rounded-lg bg-white p-5 shadow-brand-lg"
            >
              <button
                type="button"
                onClick={toggleCategories}
                className="absolute right-3 top-3 border-0 bg-transparent"
                aria-label="Close"
              >
                <FaTimes size={24} color="#000" />
              </button>
              <h3 className="mb-5 text-center font-heading">Categories</h3>
              <CategoriesList />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

type BlogCardPost = {
  id: number;
  category: string;
  date: string;
  readTime: string;
  title: string;
  image: StaticImageData;
};

const blogPosts: BlogCardPost[] = [
  {
    id: 1,
    category: "Startup",
    date: "March 29, 2025",
    readTime: "5 min read",
    title: "From Startup to Scale-Up: Key Strategies for Navigating the Growth Phase",
    image: blogcard1,
  },
  {
    id: 2,
    category: "Startup",
    date: "April 5, 2025",
    readTime: "5 min read",
    title: "The Future of Business Efficiency: A Closer Look at 8thGear’s Transformational Services.",
    image: blogcard2,
  },
  {
    id: 3,
    category: "Startup",
    date: "May 16, 2025",
    readTime: "5 min read",
    title: "Unlock Business Growth with 8thGear’s Growth-as-a-Service (GaaS)",
    image: blogcard3,
  },
];

function BlogSection() {
  const [selectedFilter, setSelectedFilter] = useState("");

  const filteredBlogPosts = selectedFilter ? blogPosts.filter((post) => post.category === selectedFilter) : blogPosts;

  return (
    <div className="mx-auto max-w-350 px-4 py-10">
      <select
        value={selectedFilter}
        onChange={(event) => setSelectedFilter(event.target.value)}
        className="w-45 rounded-md border-0 bg-[#920F84] px-3 py-2 text-sm font-bold text-white"
      >
        <option value="">Filter Blog Posts</option>
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Press Release">Press Release</option>
      </select>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {filteredBlogPosts.map((post) => (
          <div key={post.id} className="overflow-hidden rounded-md shadow-brand">
            <div className="relative h-62.5 w-full">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            <div className="bg-grey-bg p-3">
              <p className="mb-1 text-xs font-bold uppercase text-[#6a1b9a]">
                {post.category} • {post.date} • {post.readTime}
              </p>
              <h3 className="mb-1 text-base font-bold text-primary">{post.title}</h3>
              <Link href={`/read-more/${post.id}`} className="text-sm font-bold text-[#6a1b9a] no-underline">
                Read More ➔
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
