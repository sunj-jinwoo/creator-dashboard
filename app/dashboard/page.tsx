import Dashboard from "./dashboard";
import { fetchVideos } from "../actions";
export default async function FullDashboard() {
  const videos = await fetchVideos();
  return (
    <div>
      <Dashboard videos={videos} />
    </div>
  );
}
