import Articles from "@/components/Articles";
import Experience from "@/components/Experience";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-4 mb-12">
      <Profile />
      <Experience />
      <Projects />
      <Skills />

      <Articles />
      {/* <Certifications /> */}

    </div>
  );
}
