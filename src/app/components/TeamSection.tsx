import React from 'react';
import Image from 'next/image';
const teamMembers = [
  { name: "Holden Caulfield", position: "UI Designer", image: "/blog08.jpg" },
  { name: "Henry Letham", position: "CTO", image: "/team01.jpg" },
  { name: "Oskar Blinde", position: "Founder", image: "/team03.jpg" },
  { name: "John Doe", position: "Creative Director", image: "/team04.jpg" },
  { name: "Martin Eden", position: "Lead Writer", image: "/team05.jpg" },
  { name: "Boris Kitua", position: "Editor in Chief", image: "/team06.jpg" }
];
const TeamSection = () => {
  return (
    <>
      <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="animate-in fade-in zoom-in sm:text-5xl text-2xl font-bold font-serif mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
              Our Team
            </h1>
          </div>
          <div className="flex flex-wrap -m-2">
            {teamMembers.map((member, index) => (
              <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-300 animate-in fade-in zoom-in">
                  <Image 
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={member.image}
                    width={64} 
                    height={64} 
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-600 title-font font-medium">{member.name}</h2>
                    <p className="text-gray-500">{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};



export default TeamSection;
