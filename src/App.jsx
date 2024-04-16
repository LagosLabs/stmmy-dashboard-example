import React from "react";
import LeftColumn from "./components/LeftColumn";
import Navbar from "./components/Navbar";
import RightColumn from "./components/RightColumn";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useAccount } from "wagmi";

function App() {
  const { address } = useAccount();

  return (
    <main className="relative min-h-screen flex">
      {/* Fixed Sidebar */}
      {address && (
        <div className="fixed left-0 top-0 h-full z-30">
          <Sidebar />
        </div>
      )}

      {/* Main content area, alongside the sidebar */}
      <div className="flex-1 flex flex-col" style={{ paddingLeft: address ? '250px' : '0px' }}>
        {/* Wallet connection button */}
        <div className={address ? "absolute top-0 left-0 p-4 z-50" : "flex justify-center items-center min-h-screen"}>
          <w3m-button balance={address ? "hide" : "show"} loadingLabel={address ? "Connected to Stmmy Dashboard" : "Logging into Stmmy Dashboard"} />
        </div>

        {/* Conditional rendering of Navbar and content columns */}
        {address && (
          <div className="w-full">
            <Navbar />
            <div className="flex flex-col flex-1">
              <div className="grid md:grid-cols-3 gap-4 w-full p-4">
                <div className="col-span-2">
                  <LeftColumn />
                </div>
                <div className="w-full">
                  <RightColumn />
                </div>
              </div>
              <div className="flex flex-col flex-1 relative">
                <Footer />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
