import React from "react";
import TeamSection from "../components/TeamSection";

const About = () => {
  return (
    <>
      <section>
        <div className="m-auto bg-black ">
          <h1 className="text-5xl text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] pt-7 font-serif font-bold text-white animate-in fade-in zoom-in">
            About Magic Stories
          </h1>
          <p className="text-gray-300 py-7 text-center text-xl font-serif font-medium animate-in fade-in zoom-in">
            Sharing stories that inspire, teach, and bring people together
            worldwide.
          </p>
          <p className="text-white max-w-[800px] mx-auto text-center text-lg font-medium leading-relaxed animate-in fade-in zoom-in">
            Magic Stories was created with a simple goal: to share meaningful
            stories. We believe storytelling can inspire change, promote
            understanding, and connect people across cultures and communities.
          </p>
          <TeamSection />
        </div>
      </section>
    </>
  );
};

export default About;
