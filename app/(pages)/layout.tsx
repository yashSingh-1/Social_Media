import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <div className="w-full md:invisible">
      <NavBar />
      </div>
      <div className="md:grid grid-cols-5">
        <div className="fill">
        <Sidebar />
        </div>
        <div className="col-span-4 w-full h-screen mt-[50px] md:mt-[0px] ">
        {children}
        </div>
        
    </div>
    </div>
    
  );
}
