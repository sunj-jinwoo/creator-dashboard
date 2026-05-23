"use client";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 px-6 text-white">
      <main className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-bold text-purple-200">
          Creator Dashboard
        </div>
        <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
          Your Content, Organized.
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-gray-300 sm:text-xl">
          Turn scattered ideas into a clear creator pipeline for scripting,
          editing, and publishing.
        </p>
        <button
          onClick={() => signIn("google")}
          type="button"
          className="mt-10 flex items-center gap-3 rounded-lg border border-white/20 bg-white px-6 py-4 text-base font-black text-gray-950 shadow-2xl shadow-purple-950/40 transition hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-purple-800/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-base font-black">
            <span className="text-blue-500">G</span>
          </span>
          Continue with Google
        </button>
      </main>
    </div>
  );
}
