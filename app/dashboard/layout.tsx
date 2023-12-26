import React from "react";
import Sidebar from "../ui/dashboard/sidebar/page";
import Navbar from "../ui/dashboard/navbar/page";

export default function layout({ children }) {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
