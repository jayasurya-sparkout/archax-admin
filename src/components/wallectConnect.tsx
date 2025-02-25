"use client";

import * as React from "react";

import {
  useConnect,
  useAccount,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";

import { Button } from "@/components/ui/button";

import Image from "next/image";

export const WalletOptions: React.FC = () => {
  const { connectors, connect, isPending, error, status } = useConnect();

  const { address, isConnected } = useAccount();

  const { disconnect } = useDisconnect();

  const { data: ensAvatar } = useEnsAvatar({ name: address });

  const { data: ensName } = useEnsName({ address });

  const handleConnect = () => {
    if (connectors && connectors.length > 0) {
      connect({ connector: connectors[0] });
    }
  };

  return (
    <div className="text-center p-6 bg-[#fff] text-black rounded-sm">

      {isConnected ? (
        <div className="flex flex-col items-end">
          {ensAvatar && (
            <Image
              src={ensAvatar}
              alt="ENS Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          )}

          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold">
              {ensName
                ? ensName
                : address?.slice(0, 6) + "..." + address?.slice(-4)}
            </p>

            <Button
              variant="outline"
              className="bg-red-500 hover:bg-red-700 text-white hover:text-white border-none text-md"
              style={{ padding: "12px 20px" }}
              onClick={() => disconnect()}
            >
              Disconnect
            </Button>
          </div>
        </div>
      ) : (
        <>
          {connectors.length > 0 && isConnected && (
            connectors.map((connector) => (
              <Button
                key={connector.uid}
                variant="outline"
                className="mb-3 bg-blue-500 hover:text-white text-white hover:bg-blue-700 border-none text-md"
                style={{ padding: "20px 15px" }}
                onClick={() => connect({ connector })}
                disabled={isPending}
              >
                {isPending ? "Connecting..." : `Connect with ${connector.name}`}
              </Button>
            ))
          ) }
        </>
      )}

      {error && <p className="text-red-500 mt-2">{error.message}</p>}
    </div>
  );
};
