import Link from "next/link";
import React from "react";

const posts = [
  {
    image: "/featured01.jpg",
    title: "The Art of MindFull Living",
    description:
      "Find out how mindfulness can change your daily life and bring calm to your mind.",
  },
  {
    image: "/featured02.jpg",
    title: "Future of Technology",
    description: "Discover the latest innovations that will shape our future.",
  },
  {
    image: "/featured03.jpg",
    title: "Sustainable Living Guide",
    description:
      "Easy ways to reduce your environmental impact and live sustainably.",
  },
];
const MagicStories = () => {
  return (
    <>
      <section>
        <div className="h-full xl:bg-cover lg:bg-cover sm:bg-auto md:bg-auto bg-fixed bg-no-repeat bg-[url('/hero-blog3.jpg')] ">
          <h1 className="text-white 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-1xl font-bold text-center font-serif animate__animated animate__fadeInLeft pt-10 ">
            Featured Posts
          </h1>

          <div className="container mx-auto px-5 py-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Link key={index} href={`/blog`}>
                  <div className="relative rounded-lg overflow-hidden group">
                    <div
                      className="h-60 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url(${post.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute bottom-4 left-4 text-white z-10">
                      <h2 className="text-lg font-bold">{post.title}</h2>
                      <p className="text-sm opacity-80">{post.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MagicStories;
