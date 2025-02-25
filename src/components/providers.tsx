'use client';

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { WagmiProvider, useAccount } from "wagmi";
import { config } from "../../config"; 

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import { WalletOptions } from "./wallectConnect";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <SidebarProvider className="w-full">
          <AppSidebar classname="w-1/5"/>
          <main className="w-full md:w-4/5 md:ml-auto" style={{ backgroundColor: "#1f2937", color: "white" }}>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

function WalletComponent() {
  const { isConnected } = useAccount();
  
  return isConnected ? <WalletOptions /> : null;
}
