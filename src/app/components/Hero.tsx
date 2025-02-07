import React from "react";
import "animate.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return (
    <>
      <header className="h-screen">
        <div className="h-screen bg-cover bg-no-repeat bg-[url('/hero3.png')] flex flex-col justify-center items-center">
          <h4 className="text-white text-sm font-serif italic font-medium text-center rounded-3xl bg-zinc-900 px-4 py-2 mb-4 animate__animated animate__fadeInLeft flex ">
            <svg
              className="h-5 w-5 text-white mx-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="12" cy="12" r="9" />{" "}
              <line x1="3.6" y1="9" x2="20.4" y2="9" />{" "}
              <line x1="3.6" y1="15" x2="20.4" y2="15" />{" "}
              <path d="M11.5 3a17 17 0 0 0 0 18" />{" "}
              <path d="M12.5 3a17 17 0 0 1 0 18" />
            </svg>
            Welcome to a World of Stories
          </h4>
          <h1 className="text-white text-6xl  md:text-7xl lg-text-7xl font-bold text-center font-serif animate__animated animate__fadeInRight hero">
            Magic Stories
          </h1>
          <h3 className="text-white text-3xl font-semibold text-center font-serif mt-4 w-1/2 animate__animated animate__fadeInLeft">
          Discover interesting stories, insights, and adventures in our carefully selected collection.
          </h3>
          
          <Link href="/blog">
                <Button className=" group relative inline-flex h-12  mt-6 animate__animated animate__fadeInRight overflow-hidden rounded-md bg-primary p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  <span className="inline-flex h-full w-full items-center justify-center rounded-md bg-background px-6 py-1 text-lg font-medium text-primary backdrop-blur-3xl transition-all group-hover:bg-background/80">
                    Explore Blog
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
        </div>
      </header>
    </>
  );
};

export default Hero;
