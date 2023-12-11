"use client";
import JustBox from "@/components/JustBox";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center  w-full bg-zinc-300 gap-4 text-center">
            <h1>Home</h1>
            <div className="">
                <h1 className="text-xl gap-2 my-1  border-b-2 border-red-600">
                    Pages
                </h1>

                <Link
                    href="/example"
                    className="p-1 bg-slate-400"
                >
                    Example
                </Link>
            </div>
            <JustBox />
        </main>
    );
}
