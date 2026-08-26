import Profile from "@/components/Profile";

export default function Home() {
  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full">
        <Profile />
      </main>
    </div>
  );
}
