import Experience from "@/components/Experience";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-2">
      <Profile />
      <Experience />
      <Projects />

    </div>
  );
}
