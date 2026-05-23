"use client";
import { useRouter } from "next/navigation";
import { videoCardProps } from "../types/types";
import { updateVideo } from "../actions";
import { deleteVideo } from "../actions";

export default function VideoCard({
  cardTitle,
  typeArray,
  updateVideoTo,
  color,
}: videoCardProps) {
  const router = useRouter();
  const columnStyles = {
    purple: {
      header: "text-purple-300",
      border: "border-purple-500/40",
      accent: "bg-purple-500/10",
      button: "bg-purple-600 hover:bg-purple-500 focus:ring-purple-400",
    },
    blue: {
      header: "text-blue-300",
      border: "border-blue-500/40",
      accent: "bg-blue-500/10",
      button: "bg-blue-600 hover:bg-blue-500 focus:ring-blue-400",
    },
    yellow: {
      header: "text-yellow-300",
      border: "border-yellow-500/40",
      accent: "bg-yellow-500/10",
      button: "bg-yellow-500 hover:bg-yellow-400 focus:ring-yellow-300 text-gray-950",
    },
    green: {
      header: "text-green-300",
      border: "border-green-500/40",
      accent: "bg-green-500/10",
      button: "bg-green-600 hover:bg-green-500 focus:ring-green-400",
    },
  }[color];

  return (
    <section
      className={`min-w-64 flex-1 rounded-lg border ${columnStyles.border} bg-gray-800 p-4 shadow-xl shadow-black/20`}
    >
      <div
        className={`mb-4 rounded-md border ${columnStyles.border} ${columnStyles.accent} px-3 py-2`}
      >
        <h2 className={`text-sm font-black tracking-wide ${columnStyles.header}`}>
          {cardTitle}
        </h2>
      </div>
      <ul className="space-y-3">
        {typeArray.map((video) => (
          <li
            key={video.id}
            className="rounded-lg border border-white/10 bg-gray-900/70 p-4 text-white"
          >
            <h3 className="text-base font-bold leading-snug">{video.title}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              {video.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
            {updateVideoTo && (
              <button
                onClick={async () => {
                  await updateVideo(video.id, updateVideoTo);
                  router.refresh();
                }}
                className={`rounded-md px-3 py-2 text-sm font-bold text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${columnStyles.button}`}
              >
                Move to {updateVideoTo}
              </button>
            )}
            <button
              onClick={async () => {
                await deleteVideo(video.id);
                router.refresh();
              }}
              className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm font-bold text-red-200 transition hover:bg-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Delete
            </button>
            </div>
          </li>
        ))}
        {typeArray.length === 0 && (
          <li className="rounded-lg border border-dashed border-white/10 bg-gray-900/40 p-4 text-sm text-gray-400">
            No videos in this stage.
          </li>
        )}
      </ul>
    </section>
  );
}
