import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { http, createConfig, WagmiProvider } from "wagmi";
import { mainnet, polygonAmoy, } from "wagmi/chains";
// import { walletConnect, coinbaseWallet } from "wagmi/connectors";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defaultWagmiConfig } from "@web3modal/wagmi";

const queryClient = new QueryClient();
const projectId = process.env.PROJECT_ID;

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, polygonAmoy];
const config = defaultWagmiConfig({
  chains: chains,
  projectId,
  metadata,
  enableEmail: true,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
  enableOnramp: true,
  themeMode: "dark", // Optional - 'light' as default
  themeVariables: {
    "--w3m-accent": "#EAB130",
    "--w3m-border-radius-master": "8px",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
