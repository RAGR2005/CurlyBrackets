import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroDivider from "./components/HeroDivider";
import Roadmap from "./pages/Roadmap";
import Achievments from "./pages/Achievements";
import Learn from "./pages/Learn";
import Topic1 from "./pages/course/Topic1";
import Topic2 from "./pages/course/Topic2";
import Topic3 from "./pages/course/Topic3";
import Topic4 from "./pages/course/Topic4";
import Topic5 from "./pages/course/Topic5";
import Topic6 from "./pages/course/Topic6";
import Topic7 from "./pages/course/Topic7";
import Topic8 from "./pages/course/Topic8";
import Topic9 from "./pages/course/Topic9";




const getCurrentPage = () => {
  if (window.location.pathname === "/roadmap") {
    return <Roadmap />;
  } 
  else if (window.location.pathname==='/learn'){
    return <Learn />
  }
  else if (window.location.pathname==='/Achievements'){
    return <Achievments />
  }
  else if (window.location.pathname==='/topic1'){
    return <Topic1 />
  }
  else if (window.location.pathname==='/topic2'){
    return <Topic2 />
  }
  else if (window.location.pathname==='/topic3'){
    return <Topic3 />
  }
  else if (window.location.pathname==='/topic4'){
    return <Topic4 />
  }
  else if (window.location.pathname==='/topic5'){
    return <Topic5 />
  }
  else if (window.location.pathname==='/topic6'){
    return <Topic6 />
  }
  else if (window.location.pathname==='/topic7'){
    return <Topic7 />
  }
  else if (window.location.pathname==='/topic8'){
    return <Topic8 />
  }
  else if (window.location.pathname==='/topic9'){
    return <Topic9 />
  }
    else {
    return (
      <>
        <Hero />
      </>
    );
  }
};

function App() {
  return (
    <>
      <Navbar />
      {getCurrentPage()}
      <Footer />
    </>
  );
}

export default App;
