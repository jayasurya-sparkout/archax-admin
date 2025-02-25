'use client';

import { WalletOptions } from "@/components/wallectConnect";
import { useAccount, useConnect } from 'wagmi';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-full justify-center items-center">
        <WalletComponent />
    </div>
  );
}

function WalletComponent() {
  const { isConnected } = useAccount();
  
  return isConnected ? <WalletOptions /> : <WalletConnectComponent />;
}

function WalletConnectComponent () {
  const { connectors, connect, isPending, error, status } = useConnect();

  const handleConnect = () => {
    if (connectors && connectors.length > 0) {
      connect({ connector: connectors[0] });
    }
  };
  return (
    <div className="text-center p-6 bg-[#fff] text-black rounded-sm">
      <div className="pb-3 text-xl">
        Please proceed with Wallet Connect
      </div>
      <Button
        onClick={handleConnect}
        variant="outline"
        className="mt-3 bg-blue-500 hover:text-white text-white hover:bg-blue-700 border-none text-md"
        style={{ padding: "20px 15px" }}
        disabled={isPending}
      >
        connect Wallet
      </Button>
    </div>
  )
}