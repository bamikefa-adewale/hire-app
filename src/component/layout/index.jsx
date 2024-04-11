import React from "react";
import Sidebar from "./Sidebar";

const Mainlayout = ({ children, text }) => {
  return (
    <main className="grid grid-cols-[300px_1fr] gap-6">
      <div className=" relative border-r border-gray-light w-full h-screen">
        <Sidebar />
      </div>
      <section className="py-12 px-6">
        <h2 className=" font-bold text-[32px] text-dark leading-[34px]">
          {text}
        </h2>
        <div className="py-20">{children}</div>
      </section>
    </main>
  );
};

export default Mainlayout;
