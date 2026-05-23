import type { Video } from "../generated/prisma/client";
import type { Status } from "../generated/prisma/enums";
export type User = {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
};

export type Session = {
  user: User;
  expires: string;
};

export type videoCardProps = {
  cardTitle: string;
  typeArray: Video[];
  updateVideoTo?: Status;
  color: "purple" | "blue" | "yellow" | "green";
};
