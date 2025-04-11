import Card from "../components/card";
import banner1 from "../assets/banner1.png"
import banner2 from "../assets/banner2.webp"
import banner3 from "../assets/banner3.webp"
import banner5 from "../assets/banner5.webp"
import banner4 from "../assets/banner4.webp"
import banner6 from "../assets/banner6.webp"
import banner7 from "../assets/banner7.webp"
import banner8 from "../assets/banner8.jpg"
import banner9 from "../assets/banner9.jpg"





const courses = [
  {
    title: "HTML & CSS Fundamentals",
    srn:1,
    description: "Learn the basics of HTML and CSS",
    imgSrc:banner1,
    tags: ["HTML", "CSS", "Frontend"],
    duration: "2h 15m",
    difficulty: "Beginner",
  },
  {
    title: "JavaScript Essentials",
    imgSrc:banner2,
    srn:2,
    description: "Master the core concepts of JavaScript programming",
    tags: ["JavaScript", "Frontend"],
    duration: "3h 45m",
    difficulty: "Beginner",
  },
  {
    title: "Advanced CSS",
    imgSrc: banner3,
    srn:3,
    description: "Create websites that look great on any device",
    tags: ["CSS", "Frontend", "Responsive"],
    duration: "2h 30m",
    difficulty: "Intermediate",
  },
  {
    title: "Git & GitHub Workflow",
    description: "Master version control for your projects",
    imgSrc:banner4,
    srn:4,
    tags: ["Git", "Github", "Tools"],
    duration: "1h 45m",
    difficulty: "Beginner",
  },
  {
    title: "Node.js Basics",
    description: "Server-side Javascript with Node.js",
    imgSrc:banner5,
    srn:5,
    tags: ["Node.js","JavaScript","Backend"],
    duration: "3h 10m",
    difficulty: "Intermediate",
  },
  {
    title: "Advanced Backend and Express",
    description: "Build advanced Express.js backends with middleware, authentication, databases, and APIs.",
    imgSrc:banner6,
    tags: ["Node.js","JavaScript","Backend"],
    duration: "4h 25m",
    srn:6,
    difficulty: "Advanced",
  },
  {
    title: "Database",
    srn:7,
    description: "Store, organize, and manage data efficiently using Databases",
    imgSrc:banner7,
    tags: ["Node.js","JavaScript","Backend","Database"],
    duration: "2h 15m",
    difficulty: "Intermediate",
  },
  {
    title: "React Basics",
    description: "Learn components, props, state, and hooks to build interactive UIs.",
    srn:8,
    imgSrc:banner8,
    tags: ["React","JavaScript","Frontend",],
    duration: "2h 40m",
    difficulty: "Intermediate",
  },
  {
    title: "Mastering React",
    description: "Master performance optimization, state management, server-side rendering, and advanced hooks.",
    imgSrc:banner9,
    srn:9,
    tags: ["React","JavaScript","Frontend",],
    duration: "3h 10m",
    difficulty: "Advanced",
  },
];


function Learn(){
  return(
    <>
     <div className="container px-4 bg-base-200 py-6 md:px-6 md:py-8">
    <div className="flex-col md:flex-row md:items-center md:justify-between">
      <h1 className="text-3xl ml-13  font-bold text-neutral tracking-tight">Learn Web Development</h1>
      <p className="text-muted-foreground ml-13 mt-1 text-gray-500">Explore curated video content organized by topics</p>
    </div>
    </div>
    <div className="bg-base-200 px-12">
<div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <Card key={index} {...course} />
      ))}
    </div>
    </div>
    </>
   
  )
}
export default Learn;