// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import React from "react";
// import { ArrowLeftIcon } from "@heroicons/react/24/outline"; // Heroicon
// import Image from "next/image";
// import CommentSection from "@/app/components/CommentSection";

// const posts = [
//   {
//     id: 1,
//     title: "The Art of Mindful Living",
//     content: `In today's fast-paced world, the practice of mindfulness has become more important than ever. Mindful living isn't just a trendy concept; it's a transformative approach to life that can help us find peace, reduce stress, and improve our overall well-being. 

//     Research has shown that regular mindfulness practice can actually change the structure and function of the brain, particularly in areas associated with attention, emotion regulation, and self-awareness.

// Mindful living is not about adding another task to your to-do list. It's about approaching life with awareness and intention. By incorporating simple mindfulness practices into your daily routine, you can experience greater peace, joy, and fulfillment in your life.
//     `,
//     date: "2024-03-04",
//     readTime: "5 min read",
//     image: "/blog01.jpg",
//     author: {
//       name: "John Doe",
//       avatar: "https://randomuser.me/api/portraits/men/1.jpg",
//     },
//   },
//   {
//     id: 2,
//     title: "Future of Technology",
//     content: `Technology is evolving at an unprecedented pace, with groundbreaking innovations emerging in fields like artificial intelligence, quantum computing, and biotechnology. These advances are reshaping industries and redefining how we live and work.

// While these technologies hold great promise, they also raise important ethical questions. How do we ensure that AI is used responsibly? What are the implications of quantum computing for data security? Addressing these challenges will be crucial as we move forward.

// The future of technology is both exciting and uncertain. By staying informed and engaging in thoughtful discussions, we can navigate this rapidly changing landscape and harness the power of innovation for the greater good.

// `,
//     date: "2024-11-14",
//     readTime: "4 min read",
//     image: "/blog07.jpg",
//     author: {
//       name: "Jane Smith",
//       avatar: "https://randomuser.me/api/portraits/women/2.jpg",
//     },
//   },
//   {
//     id: 3,
//     title: "Sustainable Living Guide",
//     content: `Sustainable living is about making conscious choices that reduce our negative impact on the environment. It involves small yet meaningful steps that collectively contribute to a healthier planet. By adopting sustainable practices, individuals can minimize waste, conserve natural resources, and lead a more eco-friendly lifestyle.

// Finally, making sustainable choices in food consumption plays a vital role. Supporting local farmers, reducing meat intake, and choosing organic products can lower the environmental impact of food production. By embracing a sustainable lifestyle, individuals not only contribute to a greener planet but also create a healthier future for generations to come. `,
//     date: "2024-09-01",
//     readTime: "8 min read",
//     image: "/blog03.jpg",
//     author: {
//       name: "Mike Johnson",
//       avatar: "https://randomuser.me/api/portraits/men/3.jpg",
//     },
//   },
//   {
//     id: 4,
//     title: "Whispers of the Enchanted Forest",
//     content: `Deep within the heart of an ancient forest lies a world shrouded in mystery and magic. The trees, centuries old, hold secrets whispered through the rustling leaves, telling tales of forgotten spells and mythical creatures. As the moonlight filters through the dense canopy, the forest comes alive with a mystical energy, guiding lost travelers toward their destiny. Those who listen closely can hear the voices of the enchanted beings that call this place home.

//     The whispers of the enchanted forest continue to lure the curious and the brave. Some seek knowledge, others seek power, but the forest gives only what it deems fit. Its mysteries remain unsolved, its magic untouched by time. Those who leave the forest often speak of a lingering presence, as if the whispers still follow them, reminding them that magic is real—waiting to be discovered by those who truly believe.`,
//     date: "2025-02-10",
//     readTime: "6 min read",
//     image: "/blog04.jpg",
//     author: {
//       name: "Alex Lee",
//       avatar: "https://randomuser.me/api/portraits/men/4.jpg",
//     },
//   },
//   {
//     id: 5,
//     title: "The Lost Spellbook of Eldoria",
//     content: `The ancient kingdom of Eldoria was once home to the most powerful sorcerers, but its greatest treasure—the Lost Spellbook—vanished centuries ago. Legends say it contains forgotten spells capable of altering reality, granting unimaginable power to anyone who unlocks its secrets. Many have searched for it, yet the book remains hidden, protected by mystical barriers and powerful enchantments. 
    

//     Guided by cryptic prophecies and an ancient map, they must navigate cursed lands, encounter magical creatures, and uncover the truth behind Eldoria’s greatest mystery. But the book’s power comes at a cost—one that could reshape the world forever. Will the magician unlock its secrets or become trapped by its dark magic? The fate of Eldoria hangs in the balance.`,
//     date: "2025-02-15",
//     readTime: "7 min read",
//     image: "/blog05.jpg",
//     author: {
//       name: "Sophia Williams",
//       avatar: "https://randomuser.me/api/portraits/women/5.jpg",
//     },
//   },
//   {
//     id: 6,
//     title: "The Moonlight Sorcerer's Curse",
//     content: `In a distant land shrouded in mystery, a powerful sorcerer was cursed under the light of a full moon, trapping his soul between the realms of the living and the dead. Legends speak of his endless wanderings, seeking a way to break the curse that binds him. His presence is felt in the chilling winds and the eerie glow that blankets the forest every full moon. 
    
    
//      Guided by ancient texts and forbidden magic, they must unlock the secrets of the sorcerer's past. Along the way, they face enchanted guardians, dark spells, and the temptation of limitless power. But time is running out, and if the curse is not broken, the sorcerer’s suffering will consume the land, plunging it into eternal darkness. The apprentice must decide—break the curse or risk becoming part of it forever. `,
//     date: "2025-02-20",
//     readTime: "5 min read",
//     image: "/blog06.jpg",
//     author: {
//       name: "Liam Davis",
//       avatar: "https://randomuser.me/api/portraits/men/6.jpg",
//     },
//   },
// ];

// export function generateStaticParams() {
//   return posts.map((post) => ({
//     id: post.id.toString(),
//   }));
// }

// interface Props {
//   params: { id: string };
// }

// const BlogPost = ({ params }: Props) => {
//   const post = posts.find((p) => p.id === Number(params.id)); // parseInt ki jagah Number() use kar lo
//   if (!post) {
//     notFound();
//   }
//   return (
//     <>
//       <article className="container max-w-4xl py-10 px-6 md:px-12 bg-transparent shadow-xl rounded-lg mx-auto ">
//         <Link href={"/blog"} className="inline-block mb-6">
//           <Button className="flex items-center ">
//             <ArrowLeftIcon className="mr-2 h-5 w-5" />
//             Back to Blogs
//           </Button>
//         </Link>
//         <div className="space-y-8">
//           <div className="relative">
//             <Image
//               width={400}
//               height={500}
//               src={post.image}
//               alt={post.title}
//               className="w-full h-[400px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
//             />
//           </div>
//           <div className="flex items-center space-x-4 mt-5">
//             <div className="relative">
//               <Image
//                 width={20}
//                 height={30}
//                 alt={post.author.name}
//                 src={post.author.avatar}
//                 className="h-14 w-14 rounded-full object-cover border-4 border-white shadow-lg"
//               />
//               <div className="absolute right-0 bottom-0 bg-green-500 h-4 w-4 rounded-full border-2 border-white"></div>
//             </div>
//             <div>
//               <div className="font-semibold text-xl text-gray-500">
//                 {post.author.name}
//               </div>
//               <div className="text-sm text-gray-500">
//                 {post.date} . {post.readTime}
//               </div>
//             </div>
//           </div>

//           <h1 className="text-4xl font-blod text-gray-200 mt-4">
//             {post.title}
//           </h1>
//           <div className="prose prose-lg prose-neutral dark:prose-invert mt-6 max-w-none">
//             {post.content.split("\n\n").map((paragraph, index) => (
//               <p
//                 key={index}
//                 className="mb-6 leading-relaxed text-lg text-gray-400"
//               >
//                 {paragraph}
//               </p>
//             ))}
//           </div>
//         </div>
//         <CommentSection />
//       </article>
//     </>
//   );
// };

// export default BlogPost;
