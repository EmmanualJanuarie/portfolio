import About from "../components/About";
import Certificates from "../components/Certificates";
import Experience from "../components/Exeperience";
import Header from "../components/Header";
import MatrixBackground from "../components/MatrixBackground";
import Skills from "../components/Skills";
import UnderConstruction from "../components/UnderConstruction";

const LandingPage = () => {
   const portfolio = () =>{
      return(
        <div className="relative min-h-screen bg-black text-gray-200 font-mono p-4 sm:p-6 overflow-hidden">

        {/* Animated Background */}
        <MatrixBackground />

        {/* Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto grid gap-6 mt-10">
            <Header />
            <About />
            <Skills />
            <Experience />
            <Certificates />
        </div>

    </div>
      );
   }
  return (
    <>
      <div className="hidden">
          {portfolio()}
      </div>

      <div className="">
        <UnderConstruction/>
      </div>
    </>
  );
};

export default LandingPage;
