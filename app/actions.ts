"use server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { Status } from "./generated/prisma/enums";

export default async function saveVideo(title: string, description: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user) return;
  await prisma.video.create({
    data: {
      title,
      description,
      creatorId: user.id,
    },
  });
}

export async function fetchVideos() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user) return [];
  const video = await prisma.video.findMany({ where: { creatorId: user.id } });
  return video;
}

export async function updateVideo(id: string, newstatus: Status) {
  await prisma.video.update({
    where: { id: id },
    data: { status: newstatus },
  });
}

export async function deleteVideo(id: string) {
  await prisma.video.delete({
    where: { id: id },
  });
}
