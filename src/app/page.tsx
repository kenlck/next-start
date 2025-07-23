// Home page with engaging design and a button to redirect to /login
"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { trpc } from "@/utils/trpc";
import React from "react";

export default function Home() {
  const { data, isLoading, error } = trpc.hello.hello.useQuery();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="mb-6">
        <div className="text-center">
          <span className="font-mono text-sm text-purple-700 bg-purple-50 px-3 py-1 rounded">
            {isLoading ? "Loading greeting..." : error ? "Error loading greeting" : data?.greeting}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 max-w-lg w-full">
        <Image src="/next.svg" alt="Next Start" width={120} height={40} className="dark:invert" priority />
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">Welcome to Next Start</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300">
          Your modern communication dashboard. Connect, collaborate, and stay productive.
        </p>
        <ul className="text-gray-500 dark:text-gray-400 text-base list-disc pl-6 space-y-1 text-left">
          <li>Secure login and user management</li>
          <li>Real-time project updates</li>
          <li>Intuitive, responsive design</li>
        </ul>
        <Link href="/login">
          <Button asChild size="lg" className="mt-4 w-full sm:w-auto">
            <span>Go to Login</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
