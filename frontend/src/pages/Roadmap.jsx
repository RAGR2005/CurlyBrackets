import React, { useState } from 'react';

const WeekSection = ({ weekNumber, title, lectures, children }) => (
  <div className="mb-12 bg-base-200 font-mono">
    <div className="text-base-content mb-2">Week {weekNumber} • {lectures}</div>
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    {children}
  </div>
);

const TopicSection = ({ title, topics }) => {
  const [checkedTopics, setCheckedTopics] = useState({});

  const toggleCheck = (index) => {
    setCheckedTopics((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="bg-base-200 mb-6">
      <h3 className="text-xl bg-base-200 font-semibold mb-4">{title}</h3>
      <div className="space-y-3">
        {topics.map((topic, index) => (
          <a 
            key={index} 
            href={topic.link}  
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <div
              className="flex items-center space-x-2 w-full text-left p-2 border border-primary-content rounded-lg hover:bg-primary transition cursor-pointer">
              <div
                className={`w-5 h-5 flex items-center justify-center rounded-full border-2 border-primary-content transition ${checkedTopics[index] ? 'bg-primary-content' : 'bg-white'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  toggleCheck(index);
                }}
              >
                {checkedTopics[index] && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
              </div>
              <span className="text-gray-700">{topic.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const Curriculum = () => {
  return (
    <div className="bg-base-200">
      <div className="max-w-4xl mx-auto px-4 py-12 bg-base-200">
        <WeekSection weekNumber={1} title="HTML" lectures="5 Lectures">
          <div className="grid md:grid-cols-2 gap-8">
            <TopicSection title="Introduction" topics={[ 
              { name: "Learn the basics", link: "https://youtu.be/mf2VNhjyjDE?si=CCTeyHVa4c4R26J2" },
              { name: "Writing Semantic HTML", link: "https://www.youtube.com/watch?v=DSRMCZwM3YE" },
              { name: "Forms and Validation", link: "https://youtu.be/DFwAXVG6HtE?si=caFrFkn1yJM32rwK" }
            ]} />
            <TopicSection title="Intermediate Topics" topics={[ 
              { name: "Accessibility", link: "#" },
              { name: "SEO Basics", link: "#" }
            ]} />
          </div>
        </WeekSection>

        <WeekSection weekNumber={2} title="CSS" lectures="9 Lectures">
          <div className="grid md:grid-cols-3 gap-8">
            <TopicSection title="Introduction" topics={[ 
              { name: "Why do we need CSS?", link: "https://youtu.be/Sk3xrvHpM7c?si=6iyBkekDcjWx6u_S" },
              { name: "How to add CSS", link: "https://youtu.be/Sk3xrvHpM7c?si=DFExrHueNLTceAkf" },
              { name: "Basic of CSS", link: "https://youtu.be/uO7zBb3uIgw?si=3QQ73L0xTqX9hS1F" },
              { name: "Responsiveness", link: "#" },
              { name: "Animation", link: "#" }
            ]} />
            <TopicSection title="Layout" topics={[ 
              { name: "Flexbox", link: "#" },
              { name: "Grid", link: "https://youtu.be/uO7zBb3uIgw?si=3QQ73L0xTqX9hS1F" }
            ]} />
            <TopicSection title="CSS Framework" topics={[ 
              { name: "Bootstrap", link: "https://www.youtube.com/watch?v=Jyvffr3aCp0" },
              { name: "Tailwind CSS", link: "https://www.youtube.com/watch?v=_9mTJ84uL1Q" }
            ]} />
          </div>
        </WeekSection>

        <WeekSection weekNumber={3} title="JavaScript" lectures="3 Lectures">
          <div className="grid md:grid-cols-3 gap-8">
            <TopicSection title="Basic and Advanced" topics={[ 
              { name: "Learn the basics", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
              { name: "DOM Manipulation", link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" },
              { name: "Advanced Topics", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference" }
            ]} />
          </div>
        </WeekSection>
        <WeekSection weekNumber={4} title="Git and Github" lectures="7 Lectures">
          <div className="grid md:grid-cols-3 gap-8">
            <TopicSection title="Git" topics={[ 
              { name: "Introduction to GIT", link: "https://git-scm.com/doc" },
              { name: "Master Git Init", link: "https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository" },
              { name: "Git commits and logs", link: "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository" },
              { name: "Git internal working and configs", link: "https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration" },
              { name: "Git merge and git conflicts", link: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging" },
              { name: "Git Diff and stashing", link: "https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning" }
            ]} />
            <TopicSection title="Github" topics={[ 
              { name: "Github in one shot", link: "https://docs.github.com/en" }
            ]} />
          </div>
        </WeekSection>
        <WeekSection weekNumber={5} title="Backend Development" lectures="4 Lectures">
          <div className="grid md:grid-cols-3 gap-8">
            <TopicSection title="Introduction" topics={[ 
              { name: "Overview", link: "#" },
              { name: "Backend Tools and Techniques", link: "#" }
            ]} />
            <TopicSection title="Technology" topics={[ 
              { name: "Node.js", link: "https://nodejs.org/en/docs/" },
              { name: "Express", link: "https://expressjs.com/en/starter/installing.html" }
            ]} />
          </div>
        </WeekSection>
        <WeekSection weekNumber={6} title="Express with Node.js And API" lectures="6 Lectures">
          <div className="grid md:grid-cols-3 gap-8">
            <TopicSection title="Express with Node.js" topics={[
              { name: "Creating First Server with Express", link: "#" }, 
              { name: "HTTP Requests", link: "#" },
              { name: "Postman", link: "#" },
              { name: "Middlewares", link: "#" }
            ]} />
            <TopicSection title="API" topics={[
              { name: "REST API", link: "#" },
              { name: "GraphQL API", link: "#" }
            ]} />
          </div>
        </WeekSection>

        <WeekSection weekNumber={7} title="Database" lectures="5 Lectures">
          <div className="grid md:grid-cols-3 gap-8">
            <TopicSection title="DBMS Basics" topics={[
              { name: "Different types of Database", link: "#" },
              { name: "No SQL vs SQL", link: "#" }
            ]} />
            <TopicSection title="No SQL" topics={[
              { name: "MongoDB in one shot", link: "#" }
            ]} />
            <TopicSection title="SQL" topics={[
              { name: "PostgreSQL DB", link: "#" },
              { name: "Prisma", link: "#" }
            ]} />
          </div>
        </WeekSection>

        <WeekSection weekNumber={8} title="React" lectures="10 Lectures">
          <div className="grid md:grid-cols-3 gap-8">
            <TopicSection title="Basic Topics" topics={[
              { name: "Components", link: "https://youtu.be/cYkAGt9Fhsw?si=aAYHWp04GGN1xs-Z" },
              { name: "Rendering", link: "https://youtu.be/qol-nSNGK8o?si=YZWWiz281nJZ58Hw" },
              { name: "Props", link: "#" },
              { name: "Hooks", link: "#" },
              { name: "Routers", link: "#" }
            ]} />
            <TopicSection title="Intermediate Topics" topics={[
              { name: "State management (Redux)", link: "#" },
              { name: "API Calls", link: "#" },
              { name: "Framework (Next JS)", link: "#" },
              { name: "Type & validation (Zod)", link: "#" },
              { name: "Animation (Framer)", link: "#" }
            ]} />
          </div>
        </WeekSection>
      </div>
    </div>
  );
};

export default Curriculum;
