'use client';

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { WagmiProvider } from "wagmi";
import { config } from "../../config"; // Ensure this contains the correct Wagmi setup

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <SidebarProvider className="w-full">
          <AppSidebar classname="w-1/5" />
          <main className="w-full md:w-4/5 md:ml-auto" style={{ backgroundColor: "#1f2937", color: "white" }}>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}
