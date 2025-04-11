// import { ArrowLeft, Clock, Star, CheckCircle2 } from "lucide-react";
// import banner7 from "../../assets/banner7.webp";
// import { useState } from "react";

// function Topic7({ onBack }) {
//   const course = {
//     title: "Database",
//     description: "Store, organize, and manage data efficiently using Databases",
//     image: "/placeholder.svg?height=400&width=800",
//     duration: "2h 15m",
//     level: "Intermediate",
//     progress: 47,
//     tags: ["Database", "SQL", "NoSQL"],
//     sections: [
//       {
        // lessons: [
        //   { title: "Different types of Database", duration: "10m", completed: false },
        //   { title: "No SQL vs SQL", duration: "15m", completed: true },
        //   { title: "MongoDB in one shot", duration: "20m", completed: true },
        //   { title: "PostgreSQL DB", duration: "25m", completed: false },
        //   { title: "Prisma", duration: "30m", completed: true },
        // ],
//       },
//     ],
//   };

//   return (
    
//     <div className="bg-base-200 ">
//       {/* Back Button */}
//       <div className="flex">
//       <div className="container px-4 py-6 md:px-6 md:py-8">
//         <div className="mb-6 ml-14 text-gray-500 hover:text-neutral">
//           <a href="/learn" className="inline-flex items-center text-sm font-medium">
//             <ArrowLeft className="mr-1 h-4 w-4" />
//             Back to Courses
//           </a>
//         </div>

//         {/* Banner Image */}
//         <div className="rounded-lg overflow-hidden">
//           <img src={banner7} alt="title" className="object-cover rounded-lg w-4xl  ml-14 h-140" />
//         </div>
//       </div>

//       {/* Progress Card */}
//       <div className="flex-col">
//       <div className="mr-14 mt-20 border-2-gray-500 text-neutral">
//         <div className="card w-100 h-50 bg-base-100 card-md shadow-sm">
//           <div className="card-body">
//             <h2 className="card-title">Your Progress</h2>
//             <div className="flex justify-between w-full">
//               <p>Overall Completion</p>
//               <p className="pl-50">{course.progress}%</p>
//             </div>
//             <div className="py-2">
//               <progress className="progress progress-neutral h-4 w-87" value={course.progress} max="100"></progress>
//             </div>
//             <form action="http://localhost:5000/redirect" method="GET">
//               <button type="submit" className="px-6 h-12 py-3 btn btn-block btn-neutral hover:bg-neutral-700 hover:border-neutral-700 rounded-lg flex items-center gap-1.5">
//                 Continue Learning
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
//                   <path d="M5 12h14"></path>
//                   <path d="m12 5 7 7-7 7"></path>
//                 </svg>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <ul className="list my-7 bg-base-100 rounded-box shadow-md w-100">
  
//   <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Your Badge Status</li>
  
//   <li className="list-row">
//     <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
//     <div><img className="size-10 rounded-box" src="https://i.pinimg.com/736x/28/a0/f9/28a0f97600c6a2ae01943922d0022500.jpg"/></div>
//     <div className="list-col-grow">
//       <div>Hatchling</div>
//       <div className="text-xs uppercase font-semibold opacity-60">Unlocked</div>
//     </div>
    
//   </li>
  
//   <li className="list-row">
//     <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
//     <div><img className="size-10 rounded-box bg-base-200" src="https://i.pinimg.com/736x/16/69/74/16697408af2169ce72ed349e6bdf14d8.jpg"/></div>
//     <div className="list-col-grow">
//       <div>Phoenix</div>
//       <div className="text-xs uppercase font-semibold opacity-60">Locked</div>
//     </div>
    
//   </li>
  
//   <li className="list-row">
//     <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>
//     <div><img className="size-10 rounded-box" src="https://i.pinimg.com/736x/d8/17/f9/d817f92a5a94b99d73ec32b7c351f6f5.jpg"/></div>
//     <div className="list-col-grow">
//       <div>Dragon</div>
//       <div className="text-xs uppercase font-semibold opacity-60">Locked</div>
//     </div>
    
//   </li>
//   <li className="list-row">
//     <div className="text-4xl font-thin opacity-30 tabular-nums">04</div>
//     <div><img className="size-10 rounded-box" src="https://i.pinimg.com/736x/ce/f8/5f/cef85ffb6642a160559c2bee07cda5b6.jpg"/></div>
//     <div className="list-col-grow">
//       <div>Titan</div>
//       <div className="text-xs uppercase font-semibold opacity-60">Locked</div>
//     </div>
    
//   </li>
  
// </ul>
//       </div>

//       </div>

//       {/* Course Details */}
//       <div className="pb-5">
//         <div className="bg-base-100 rounded-md shadow-md ml-19 mr-8">
//           <div className="flex-col justify-center items-center ml-18">
//             <h1 className="text-3xl font-bold tracking-tight pt-4">{course.title}</h1>
//             <p className="mt-2 text-muted-foreground">{course.description}</p>
//           </div>

//           {/* Course Info */}
//           <div className="flex flex-wrap w-fit gap-6 py-2 text-sm ml-18">
//             <div className="flex items-center pt-2 gap-1">
//               <Clock className="h-4 w-4 text-muted-foreground" />
//               <span>{course.duration}</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <Star className="h-4 w-4 text-amber-500" />
//               <span>{course.level}</span>
//             </div>
//           </div>

//           {/* Course Content */}
//           <div className="px-8 pb-8">
//             <ul className="list bg-base-100 ml-9">
//               <li className="pt-4 pb-2 text-s opacity-60">Course Content</li>

//               {course.sections.map((section, sectionIndex) =>
//                 section.lessons.map((lesson, lessonIndex) => (
//                   <div >
//                   <li key={`${sectionIndex}-${lessonIndex}`} className="list-row pl-0 flex items-center justify-between py-2">
//                     <div className="text-lg font-semibold">{lesson.title}</div>
//                     <div >
//                     <button className="btn btn-square btn-ghost">
//                       <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                         <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
//                           <path d="M6 3L20 12 6 21 6 3z"></path>
//                         </g>
//                       </svg>
//                     </button>
//                     <button className="btn btn-square btn-ghost">
//                       {lesson.completed ? <CheckCircle2 className="h-5 w-5 text-neutral" /> : <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30" />}
//                     </button>
//                     </div>
//                   </li>
//                   </div>
//                 ))
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Topic7;

import { ArrowLeft, Clock, Star, CheckCircle2 } from "lucide-react";
import banner7 from "../../assets/banner7.webp";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Topic7({ onBack }) {
  const [videoUrl, setVideoUrl] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isYoutube, setIsYoutube] = useState(false);

  const handlePlayClick = (title) => {
    const videoLinks = {
      "Different types of Database": "https://www.youtube.com/watch?v=qol-nSNGK8o",
      "No SQL vs SQL": "https://www.youtube.com/watch?v=NyNeBxwYohY",
      "MongoDB in one shot": "https://www.youtube.com/watch?v=q15h4RXBTcI&t=162s",
      "Middlewares": "https://www.youtube.com/watch?v=q15h4RXBTcI&t=162s",
      "PostgreSQL DB": "https://www.youtube.com/watch?v=q15h4RXBTcI&t=162s",
      "Prisma": "https://www.youtube.com/watch?v=q15h4RXBTcI&t=162s"
    };
    const url = videoLinks[title];
    if (url) {
      setIsYoutube(url.includes("youtube.com") || url.includes("youtu.be"));
      setVideoUrl(url);
      setShowVideo(true);
    }
  };

  const closeModal = () => {
    setShowVideo(false);
    setVideoUrl(null);
    setIsYoutube(false);
  };

  const getYoutubeEmbedUrl = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  const course = {
    title: "Database",
    description: "Store, organize, and manage data efficiently using Databases",
    image: "/placeholder.svg?height=400&width=800",
    duration: "2h 15m",
    level: "Intermediate",
    progress: 84,
    tags: ["Database", "SQL", "NoSQL"],
    sections: [
      {
        lessons: [
          { title: "Different types of Database", duration: "10m", completed: false },
          { title: "No SQL vs SQL", duration: "15m", completed: true },
          { title: "MongoDB in one shot", duration: "20m", completed: true },
          { title: "PostgreSQL DB", duration: "25m", completed: false },
          { title: "Prisma", duration: "30m", completed: true },
        ],
      },
    ],
  };

  return (
    <div className="bg-base-200 relative">
      {/* Back Button */}
      <div className="flex">
        <div className="container px-4 py-6 md:px-6 md:py-8">
          <div className="mb-6 ml-14 text-gray-500 hover:text-neutral">
            <a href="/learn" className="inline-flex items-center text-sm font-medium">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Courses
            </a>
          </div>

          {/* Banner Image */}
          <div className="rounded-lg overflow-hidden">
            <img src={banner7} alt="title" className="object-cover rounded-lg w-4xl ml-14 h-140" />
          </div>
        </div>

        {/* Progress Card */}
        <div className="flex-col">
          <div className="mr-14 mt-20 border-2-gray-500 text-neutral">
            <div className="card w-100 h-50 bg-base-100 card-md shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Your Progress</h2>
                <div className="flex justify-between w-full">
                  <p>Overall Completion</p>
                  <p className="pl-50">{course.progress}%</p>
                </div>
                <div className="py-2">
                  <progress className="progress progress-neutral h-4 w-87" value={course.progress} max="100"></progress>
                </div>
                <form action="http://localhost:5000/redirect" method="GET">
                  <button type="submit" className="px-6 h-12 py-3 btn btn-block btn-neutral hover:bg-neutral-700 hover:border-neutral-700 rounded-lg flex items-center gap-1.5">
                    Continue Learning
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* Badge list omitted */}
          <ul className="list my-7 bg-base-100 rounded-box shadow-md w-100">
  
  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Your Badge Status</li>
  
  <li className="list-row">
    <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
    <div><img className="size-10 rounded-box" src="https://i.pinimg.com/736x/28/a0/f9/28a0f97600c6a2ae01943922d0022500.jpg"/></div>
    <div className="list-col-grow">
      <div>Hatchling</div>
      <div className="text-xs uppercase font-semibold opacity-60">Unlocked</div>
    </div>
    
  </li>
  
  <li className="list-row">
    <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
    <div><img className="size-10 rounded-box bg-base-200" src="https://i.pinimg.com/736x/16/69/74/16697408af2169ce72ed349e6bdf14d8.jpg"/></div>
    <div className="list-col-grow">
      <div>Phoenix</div>
      <div className="text-xs uppercase font-semibold opacity-60">Locked</div>
    </div>
    
  </li>
  
  <li className="list-row">
    <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>
    <div><img className="size-10 rounded-box" src="https://i.pinimg.com/736x/d8/17/f9/d817f92a5a94b99d73ec32b7c351f6f5.jpg"/></div>
    <div className="list-col-grow">
      <div>Dragon</div>
      <div className="text-xs uppercase font-semibold opacity-60">Locked</div>
    </div>
    
  </li>
  <li className="list-row">
    <div className="text-4xl font-thin opacity-30 tabular-nums">04</div>
    <div><img className="size-10 rounded-box" src="https://i.pinimg.com/736x/ce/f8/5f/cef85ffb6642a160559c2bee07cda5b6.jpg"/></div>
    <div className="list-col-grow">
      <div>Titan</div>
      <div className="text-xs uppercase font-semibold opacity-60">Locked</div>
    </div>
    
  </li>
  
</ul>
        </div>
      </div>

      {/* Course Details */}
      <div className="pb-5">
        <div className="bg-base-100 rounded-md shadow-md ml-19 mr-8">
          <div className="flex-col justify-center items-center ml-18">
            <h1 className="text-3xl font-bold tracking-tight pt-4">{course.title}</h1>
            <p className="mt-2 text-muted-foreground">{course.description}</p>
          </div>

          <div className="flex flex-wrap w-fit gap-6 py-2 text-sm ml-18">
            <div className="flex items-center pt-2 gap-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-amber-500" />
              <span>{course.level}</span>
            </div>
          </div>

          <div className="px-8 pb-8">
            <ul className="list bg-base-100 ml-9">
              <li className="pt-4 pb-2 text-s opacity-60">Course Content</li>
              {course.sections.map((section, sectionIndex) =>
                section.lessons.map((lesson, lessonIndex) => (
                  <div key={`${sectionIndex}-${lessonIndex}`}>
                    <li className="list-row pl-0 flex items-center justify-between py-2">
                      <div className="text-lg font-semibold text-primary dark:text-black">
                        {lesson.title}
                      </div>
                      <div>
                        <button className="btn btn-square btn-ghost" onClick={() => handlePlayClick(lesson.title)}>
                          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                              <path d="M6 3L20 12 6 21 6 3z"></path>
                            </g>
                          </svg>
                        </button>
                        <button className="btn btn-square btn-ghost">
                          {lesson.completed ? <CheckCircle2 className="h-5 w-5 text-neutral" /> : <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30" />}
                        </button>
                      </div>
                    </li>
                  </div>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Animated Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-base-100 p-4 md:p-6 rounded-2xl shadow-2xl relative w-[95%] md:w-[70%] lg:w-[50%]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <button onClick={closeModal} className="absolute top-2 right-2 text-lg font-bold btn btn-sm btn-circle">
                ✕
              </button>
              {isYoutube ? (
                <iframe
                  className="w-full aspect-video rounded-xl"
                  src={getYoutubeEmbedUrl(videoUrl)}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video controls autoPlay className="w-full rounded-xl">
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Topic7;
