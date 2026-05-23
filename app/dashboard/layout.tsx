"use client";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import logo from "../../assets/logo.png";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSession();
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-white/10 bg-gray-950/95 px-6 text-white shadow-lg shadow-black/30 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/30 bg-gray-900 shadow-lg shadow-purple-950/30">
            <Image
              src={logo}
              alt="Creator Dashboard logo"
              className="h-8 w-8 rounded-lg object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-base font-black tracking-tight sm:text-lg">
              Creator Dashboard
            </h1>
            <p className="hidden text-xs font-semibold text-gray-500 sm:block">
              Content pipeline
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {session?.data?.user?.name && (
            <div className="hidden rounded-full border border-white/10 bg-gray-900 px-3 py-1.5 text-sm font-semibold text-gray-300 sm:block">
              {session.data.user.name}
            </div>
          )}
          <button
            onClick={() => {
              signOut({ callbackUrl: "/" });
            }}
            className="rounded-md border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-black text-purple-100 transition hover:border-purple-400/50 hover:bg-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Sign Out
          </button>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
