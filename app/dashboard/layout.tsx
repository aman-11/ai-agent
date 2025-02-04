"use client";

import Header from "@/components/Header";
import { Authenticated } from "convex/react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <Authenticated>
        <h1>Sidebar</h1>
        {/*<Sidebar/>*/}
      </Authenticated>
      <main>
        <Header />
        {children}
      </main>
    </div>
  );
}
