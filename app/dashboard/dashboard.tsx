"use client";
import { useState } from "react";
import type { Video } from "../generated/prisma/client";
import saveVideo from "../actions";
import { useRouter } from "next/navigation";
import VideoCard from "./videoCard";

type DashboardProps = {
  videos: Video[];
};

export default function Dashboard({ videos }: DashboardProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const ideas = videos.filter((video) => video.status === "IDEA");
  const scripting = videos.filter((video) => video.status === "SCRIPTING");
  const editing = videos.filter((video) => video.status === "EDITING");
  const uploaded = videos.filter((video) => video.status === "UPLOADED");

  const router = useRouter();

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-900 px-6 py-8 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight">
            Creator Pipeline
          </h1>
          <p className="mt-2 text-sm font-medium text-gray-400">
            Plan, script, edit, and ship your next upload.
          </p>
        </div>
        <div className="flex flex-col gap-6 xl:flex-row">
          <aside className="w-full rounded-lg border border-white/10 bg-gray-800 p-5 shadow-xl shadow-black/20 xl:w-80 xl:shrink-0">
          <h2 className="text-xl font-black text-white">Add a new idea</h2>
          <form className="mt-5 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter your title..."
              className="rounded-md border border-white/10 bg-gray-900 px-4 py-3 text-sm font-medium text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Enter your description..."
              className="min-h-32 resize-none rounded-md border border-white/10 bg-gray-900 px-4 py-3 text-sm font-medium text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              type="button"
              className="rounded-md bg-purple-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-purple-950/40 transition hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={() => {
                saveVideo(title, description);
                setTitle("");
                setDescription("");
                router.refresh();
              }}
            >
              Submit
            </button>
          </form>
          </aside>
        <div className="grid min-w-0 flex-1 grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4">
          <VideoCard
            cardTitle="IDEAS"
            typeArray={ideas}
            updateVideoTo="SCRIPTING"
            color="purple"
          />
          <VideoCard
            cardTitle="SCRIPTING"
            typeArray={scripting}
            updateVideoTo="EDITING"
            color="blue"
          />
          <VideoCard
            cardTitle="EDITING"
            typeArray={editing}
            updateVideoTo="UPLOADED"
            color="yellow"
          />
          <VideoCard cardTitle="UPLOADED" typeArray={uploaded} color="green" />
        </div>
        </div>
      </div>
    </div>
  );
}
