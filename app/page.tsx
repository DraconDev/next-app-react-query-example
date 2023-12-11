"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <main className="flex min-h-screen flex-col items-center justify-between w-full">
                <h1>Home</h1>
                <div className="w-full">
                    <h1>Pages</h1>
                </div>
            </main>
        </QueryClientProvider>
    );
}
