import Link from "next/link";
import React from "react";

const AllCategory = () => {
  return (
    <>
      <section className="bg-[#13143f57] py-8 px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href={`/blog`}>
            <div className="bg-black m-auto px-12 py-14 rounded-lg hover:transition-transform hover:duration-300 animate__animated animate__fadeInLeft">
              <p className=" ">
                <svg
                  className=" hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] m-auto h-16 w-24 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </p>
              <h2 className="text-white font-medium text-lg text-center hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] ">
                All Stories
              </h2>
              <p className="text-white font-semibold text-sm text-center hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                Explore our complete collection of aritcles
              </p>
            </div>
          </Link>
          <Link href={`/about`}>
            <div className="bg-black m-auto px-12 py-14 rounded-lg hover:transition-transform hover:duration-300 hover:scale-105 animate__animated animate__fadeInLeft">
              <p>
                <svg
                  className="h-16 w-24 text-white m-auto hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
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
                  <circle cx="9" cy="7" r="4" />{" "}
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />{" "}
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />{" "}
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                </svg>
              </p>
              <h2 className="text-white font-medium text-lg text-center hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                About Us
              </h2>
              <p className="text-white font-semibold text-sm text-center hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                Learn More about our team and mission
              </p>
            </div>
          </Link>
          <Link href={`/contact`}>
            <div className="bg-black m-auto px-12 py-14 rounded-lg hover:transition-transform hover:duration-300 hover:scale-105 animate__animated animate__fadeInLeft">
              <p>
                <svg
                  className="h-16 w-24 text-white m-auto hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
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
                  <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </p>
              <h2 className="text-white font-medium text-lg text-center hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                Contact
              </h2>
              <p className="text-white font-semibold text-sm text-center hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                Have a question or want to contribute?{" "}
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default AllCategory;
