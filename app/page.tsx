import Articles from "@/components/Articles";
import Experience from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { LeftSidebar } from "@/components/LeftSidebar";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import { RightSidebar } from "@/components/RightSidebar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="w-full flex h-full relative">

      <div className="w-1/4 lg:block hidden"> <LeftSidebar /> </div>
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto lg:px-2 px-3 pb-2 gap-4">
        <Profile />
        <Experience />
        <Projects />
        <Skills />

        <Articles />
        <Footer />
        {/* <Certifications /> */}
      </div>
      <div className="w-1/4 lg:block hidden"> <RightSidebar /> </div>


    </div>
  );
}
