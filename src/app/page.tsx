'use client';
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <main className="">
      {session?.data?.user?.name}
    </main>
  )
}
