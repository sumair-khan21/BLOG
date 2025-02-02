import React from 'react'
import 'animate.css';
import "./hero.css"
import Link from 'next/link';
const Hero = () => {
  return (
    <>
    <header className='h-screen'>
      <div className="h-screen bg-cover bg-no-repeat bg-[url('/hero3.png')] flex flex-col justify-center items-center">
        <h4 className='text-white text-sm font-serif italic font-medium text-center rounded-3xl bg-zinc-900 px-4 py-2 mb-4 animate__animated animate__fadeInLeft flex '><svg className="h-5 w-5 text-white mx-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="3.6" y1="9" x2="20.4" y2="9" />  <line x1="3.6" y1="15" x2="20.4" y2="15" />  <path d="M11.5 3a17 17 0 0 0 0 18" />  <path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
          Welcome to a World of Stories
        </h4>
        <h1 className="text-white 2xl:text-7xl xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl font-bold text-center font-serif animate__animated animate__fadeInRight hero">
        Magic Stories
        </h1>
        <h3 className="text-white sm:text-xl lg:text-3xl md:text-3xl xl:text-3xl font-semibold text-center font-serif mt-4 w-1/2 animate__animated animate__fadeInLeft">
        Explore fascinating stories, insights, and adventures through our curated collection.
        </h3>
        <Link href="">
        <button className='bg-white flex xl:px-5 xl:py-3 lg:px-5 lg:py-3 md:px-3 md:py-1 sm:px-2 sm:py-1 mt-4 text-lg sm:text-xs lg:text-lg md:text-sm xl:text-lg font-medium rounded-full text-black animate__animated animate__fadeInRight'>Start Reading <svg className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-8 xl:h-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="15" y1="16" x2="19" y2="12" />  <line x1="15" y1="8" x2="19" y2="12" /></svg></button>
        </Link>
      </div>
      </header>
      {/* ----------------------------------------------------------------------- */}
      <section>
      <div className="h-full xl:bg-cover lg:bg-cover sm:bg-auto md:bg-auto bg-fixed bg-no-repeat bg-[url('/hero-blog3.jpg')] ">
      <h1 className="text-white 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-1xl font-bold text-center font-serif animate__animated animate__fadeInRight pt-10">
        Magic Stories
        </h1>



        <section className="">
  <div className="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
    <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
      <div className="relative">
        <a href="#_" className="block overflow-hidden group rounded-xl shadow-lg">
          <img src="https://images.unsplash.com/photo-1511497584788-876760111969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxmb3Jlc3R8ZW58MHwwfHx8MTcyNjkxODYzNHww&ixlib=rb-4.0.3&q=80&w=1080" className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Adventure" />
        </a>
        <div className="relative mt-5">
          <h3 className='text-white text-lg'>The Art of MindFull Living</h3>
          <p className="mb-4 text-gray-500 dark:text-gray-300">Discover how mindfulness can transform your daily life and bring peace to your mind.</p>
          <Link href=""  className="font-medium underline text-purple-600 dark:text-purple-400"><p>Read More</p></Link>
        </div>
      </div>

      <div className="relative">
        <a href="#_" className="block overflow-hidden group rounded-xl shadow-lg">
          <img src="https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Ocean" />
        </a>
        <div className="relative mt-5">
          
          <p className="mb-4 text-gray-700 dark:text-gray-300">Dive into the deep oceans and explore the beauty and mystery of the underwater world. A truly unforgettable experience.</p>
          <a href="#_" className="font-medium underline text-purple-600 dark:text-purple-400">Read More</a>
        </div>
      </div>

      <div className="relative">
        <a href="#_" className="block overflow-hidden group rounded-xl shadow-lg">
          <img src="https://images.unsplash.com/photo-1629112250823-3f091e001783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxEZXNlcnQlMjBTYWZhcml8ZW58MHwwfHx8MTcyNjkxODcwOHww&ixlib=rb-4.0.3&q=80&w=1080" className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Desert Adventure" />
        </a>
        <div className="relative mt-5">
        <p className="mb-4 text-gray-700 dark:text-gray-300">Venture into the heart of the desert and experience the thrill of a safari amidst the dunes.</p>
          <a href="#_" className="font-medium underline text-purple-600 dark:text-purple-400">Read More</a>
        </div>
      </div>
    </div>
  </div>
</section>
        {/* <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl xl:px-32 lg:px-32 md:px-20 sm:px-10 xl:py-28 lg:py-28 md:py-20 sm:py-10  pb-8 max-w-sm mx-auto xl:mt-24 lg:mt-24 md:mt-10 sm:mt-5">
    <img src="/hero-blog.jpg" alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 className="z-10 mt-3 text-2xl font-bold text-white">Living Art</h3>
    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">Discover how mindfulness can transform your daily life and bring peace to your mind.</div>
</article>
<article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl xl:px-32 lg:px-32 md:px-20 sm:px-10 xl:py-28 lg:py-28 md:py-20 sm:py-10 pb-8 max-w-sm mx-auto xl:mt-24 lg:mt-24 md:mt-10 sm:mt-5">
    <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
</article>
<article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl xl:px-32 lg:px-32 md:px-20 sm:px-10 xl:py-28 lg:py-28 md:py-20 sm:py-10 pb-8 max-w-sm mx-auto xl:mt-24 lg:mt-24 md:mt-10 sm:mt-5">
    <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
</article>       
 </div> */}
      </div>

      </section>
    </>
  )
}

export default Hero
