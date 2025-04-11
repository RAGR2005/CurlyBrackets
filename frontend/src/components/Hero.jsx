import heroImage from '../assets/4759504.webp';
import heroImage2 from '../assets/123.png'
import {  Code, Trophy, BookOpen, BarChart3 } from "lucide-react"

function Hero (){
    return (
      <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-base-200 border-t-2 border-base-300">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center px-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-neutral tracking-tight sm:text-5xl xl:text-6xl">
            Crafting Code, One {"{ }"} at a time.
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl">
              Learn web development through curated video content, interactive challenges, and a gamified experience
              that makes learning fun and engaging.
            </p>
            <div className="flex flex-col gap-2.5 min-[400px]:flex-row font-sans">
              <form action="http://localhost:5000/redirect" method="GET">
              <button type='submit' className="px-6 h-12 py-3 btn btn-neutral hover:bg-neutral-700 hover:border-neutral-700 rounded-lg flex items-center gap-1.5 ">
                Start Learning
                <svg className="pt-0.75 " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
              </form>
              <form action="http://localhost:5000/learn" method="GET">
              <button type='submit' className="px-6 h-12 py-3 btn btn-neutral border-neutral text-neutral bg-base-300 rounded-lg flex items-center gap-1.5 hover:bg-base-100">
                View Roadmaps
              </button>
              </form>
            </div>
          </div>
          <div className="relative h-[350px] lg:h-[500px] rounded-xl bg-base-200 flex items-center justify-center">
      <img src={heroImage} alt="Hero" className="h-full w-auto object-cover rounded-xl" />
    </div>
        </div>
      </div>
    </section>

    <section className="w-full bg-base-100 py-12 md:py-24 lg:py-32 border-t-2 border-base-300">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How curlyBrackets Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A gamified learning experience that makes web development fun and engaging.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-8 w-8 text-neutral" />
                </div>
                <h3 className="text-xl font-bold">Learn</h3>
                <p className="text-muted-foreground">
                  Access curated video content organized by topics and difficulty levels.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Trophy className="h-8 w-8 text-neutral" />
                </div>
                <h3 className="text-xl font-bold">Earn</h3>
                <p className="text-muted-foreground">
                  Gain experience points, unlock badges, and climb the leaderboard as you progress.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <BarChart3 className="h-8 w-8 text-neutral" />
                </div>
                <h3 className="text-xl font-bold">Track</h3>
                <p className="text-muted-foreground">
                  Monitor your progress, set goals, and visualize your learning journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-base-200 border-t-2 border-base-300">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative h-[350px] lg:h-[500px] rounded-xl overflow-hidden">
                <img src={heroImage2} alt="Learning Paths" fill className="object-cover" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl text-neutral font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Personalized Learning Paths
                </h2>
                <p className="max-w-[600px]  text-gray-500 md:text-xl">
                  Whether you're a beginner or an experienced developer, our platform offers tailored learning paths to
                  help you achieve your goals.
                </p>
                <ul className="space-y-2 text-neutral-800">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full  bg-neutral-800"></div>
                    <span>Frontend Development (HTML, CSS, JavaScript)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-neutral-800"></div>
                    <span>Backend Development (Node.js, Python, PHP)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full  bg-neutral-800"></div>
                    <span>Full Stack Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full  bg-neutral-800"></div>
                    <span>Frameworks & Libraries (React)</span>
                  </li>
                </ul>
                {/* <Link href="/roadmaps"> */}
                  <button className="mt-4 btn rounded  hover:bg-neutral-700 hover:border-neutral-700 btn-neutral">Explore Roadmaps</button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-base-100 py-12 md:py-24 lg:py-32 border-y-2 border-base-300">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-neutral tracking-tighter sm:text-5xl">Join Our Community</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with other learners, share your progress, and collaborate on projects.
                </p>
              </div>
              {/* <Link href="/signup"> */}
                <button  className="mt-4  hover:bg-neutral-700 hover:border-neutral-700 btn btn-neutral rounded">
                  Get Started Today
                </button>
              {/* </Link> */}
            </div>
          </div>
        </section>

    </>
    )
}
export default Hero;

