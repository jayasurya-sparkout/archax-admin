'use client';

import { useConnect } from 'wagmi';
import { Button } from "@/components/ui/button";

export const WalletOptions: React.FC = () => {
    const { connectors, connect, isPending, error } = useConnect();

    const handleConnect = () => {
        if (connectors.length > 0) {
            connect({ connector: connectors[0] });
        }
    };

    return (
        <div className="text-center p-6 bg-[#fff] text-black rounded-sm">
            <div className="text-xl pb-3 pt-3">Please proceed with Wallet Connect</div>
            
            <Button 
                variant="outline" 
                className="mb-3 bg-blue-500 hover:text-white text-white hover:bg-blue-700 border-none text-md" 
                style={{ padding: '20px 15px' }} 
                onClick={handleConnect}
                disabled={isPending}  // Disable button while connecting
            >
                {isPending ? "Connecting..." : "Connect Wallet"}
            </Button>

            {error && <p className="text-red-500 mt-2">{error.message}</p>}
        </div>
    );
};
