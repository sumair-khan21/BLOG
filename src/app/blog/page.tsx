import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "The Art of Mindful Living",
    excerpt:
      "Discover how mindfulness can transform your daily life and bring peace to your mind.",
    date: "2024-03-04",
    readTime: "5 min read",
    image: "/blog01.jpg",
    category: "Lifestyle",
  },
  {
    id: 2,
    title: "Future of Technology",
    excerpt:
      "Exploring the cutting-edge innovations that will shape our tomorrow.",
    date: "2024-11-14",
    readTime: "4 min read",
    image: "/blog07.jpg",
    category: "Technology",
  },
  {
    id: 3,
    title: "Sustainable Living Guide",
    excerpt:
      "Simple step to reduce your environmental impact and live more sustainably",
    date: "2024-09-01",
    readTime: "8 min read",
    image: "/blog03.jpg",
    category: "Environment",
  },
  {
    id: 4,
    title: "Whispers of the Enchanted Forest",
    excerpt:
      "Step into a mystical world where trees talk, and hidden secrets await the brave.",
    date: "2025-02-10",
    readTime: "6 min read",
    image: "/blog04.jpg",
    category: "Magic Forest",
  },
  {
    id: 5,
    title: "The Lost Spellbook of Eldoria",
    excerpt:
      "An ancient spellbook reappears after centuries, holding the power to reshape reality.",
    date: "2025-02-15",
    readTime: "7 min read",
    image: "/blog05.jpg",
    category: "Magic Spellbook",
  },
  {
    id: 6,
    title: "The Moonlight Sorcerer's Curse",
    excerpt:
      "A young apprentice must break a centuries-old curse before the next full moon.",
    date: "2025-02-20",
    readTime: "5 min read",
    image: "/blog06.jpg",
    category: "Magic Moonlight",
  },
];

const Blog = () => {
  return (
    <>
      <div className=" bg-cover bg-no-repeat bg-[url('/blog.jpg')] flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] pt-7 font-serif font-bold text-white animate-in fade-in zoom-in">
          Our Stories{" "}
        </h1>
        <p className="text-gray-300 py-7 text-center text-xl font-serif font-medium animate-in fade-in zoom-in">
          Dive into our collection of insightful articles covering technology,
          lifestyle, and more.
        </p>
        <div className="container py-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="card-hover h-full overflow-hidden group border-lg lg-accent/5 backdrop-blur-sm">
                  <div className="overflow-hidden aspect-video">
                    <Image
                      width={800}
                      height={500}
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="mb-2">
                      <span className="animated-glow inline-block rounded-full px-3 py-1 text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="transition-colors group-hover:text-primary">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-3 text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between test-sm">
                    <span>{post.date}</span>
                    <span className="font-medium text-primary">
                      {post.readTime}
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
