'use client';

import { useConnect } from 'wagmi';
import { Button } from "@/components/ui/button";

export const WalletOptions: React.FC = () => {

    const handleClick = () => {
        alert("Button clicked!");
      };
  
    return (
        <div className="text-center p-6 bg-[#fff] text-black rounded-sm">
            <div className="text-xl pb-3 pt-3">Please proceed with Wallet Connect</div>
            <Button variant="outline" className="mb-3 bg-blue-500 hover:text-white text-white hover:bg-blue-700 border-none text-md" style={{padding: '20px 15px'}} onClick={handleClick}>Connect Wallet</Button>
        </div>
    )
}
  