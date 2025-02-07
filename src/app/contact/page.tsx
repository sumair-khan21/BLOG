import React from "react";

const Contact: React.FC = () => {
  return (
    
    <div className="animated-bg h-screen bg-gray-800 animate-in fade-in zoom-in">
      <div className="pt-10 md:pt-20">
        <div className="p-4 md:p-8">
          <h1 className="text-white font-bold text-center pb-8 text-4xl md:text-5xl lg:text-6xl">
            Get in Touch

          </h1>
           <p className="text-xl text-gray-300 pb-1 text-center">
            Have a question or want to contribute? We'd love to hear from you.
          </p>
          <form className="flex flex-col items-center">
            <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
              <div className="flex flex-col md:flex-row">
                <input
                  id="name"
                  type="text"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Name"
                />
                <input
                  id="email"
                  type="email"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Email"
                />
              </div>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                id="message"
                rows={5}
                placeholder="Say Something"
                className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="border-2 text-md mt-5 rounded-md py-2 px-4 bg-gray-900  text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    
    </div>
  );
};

export default Contact;
