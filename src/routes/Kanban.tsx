import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/Card";
const Kanban = () => {
  return (
    <div className="lg:h-screen w-full">
      {/* <Header /> */}
      <main className="lg:flex items-center justify-center h-5/6 w-full bg-white">
        <div className="container-tasks lg:flex items-center justify-center gap-5 h-h-587 w-w-1051 bg-slate-500 bg-opacity-25 rounded-4xl">
          {/* to-do */}
          <div className="container-to-do lg:flex flex-col items-center gap-4 pb-2 h-h-553 w-w-310  bg-1E293B bg-opacity-25 rounded-4xl">
            <div className="div-add-quantity lg:flex justify-between items-center pl-3 pr-3 relative bottom-2 h-11 w-full bg-D3D1F8 rounded-4xl">
              <div className="lg:flex gap-2 items-center">
                <p className=" lg:flex justify-center items-center h-8 w-10 bg-4F46E5 rounded-4xl text-white">
                  25
                </p>
                <h2 className="text-4F46E5 font-bold text-base">To do</h2>
              </div>
              <button
                className=""
                onClick={() => {
                  alert("Crie sua task");
                }}
              >
                <i className="fa-solid fa-plus text-2xl text-4F46E5"></i>
              </button>
            </div>
            <div className="div-scroll-to-do lg:flex flex-col gap-5 h-full pr-1  overflow-y-auto ">
              {/* Card  */}
              <Card />
              <Card />
            </div>
          </div>
          {/* in-progress */}
          <div className="container-in-progress flex flex-col items-center gap-4 pb-2  lg:h-h-553 w-w-310 bg-1E293B bg-opacity-25 rounded-4xl">
            <div className=" lg:flex justify-between items-center relative bottom-2 pl-3 pr-3 h-11 w-full bg-FCE7C2 rounded-4xl">
              <div className="flex gap-2 items-center">
                <p className=" lg:flex justify-center items-center h-8 w-10 bg-F59E0B rounded-4xl text-white">
                  8
                </p>
                <h2 className="text-F59E0B font-bold text-base">In progress</h2>
              </div>
              <button
                className=""
                onClick={() => {
                  alert("Crie sua task");
                }}
              >
                <i className="fa-solid fa-plus text-2xl text-F59E0B"></i>
              </button>
            </div>
            <div className="div-scroll-in-progress lg:flex flex-col gap-5 h-full pr-1  overflow-y-auto ">
              {/* Card  */}
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          {/* done */}
          <div className="container-done flex flex-col items-center gap-4 pb-2 lg:h-h-553 w-w-310 bg-1E293B  bg-opacity-25 rounded-4xl">
            <div className=" lg:flex justify-between items-center relative bottom-2 pl-3 pr-3 h-11 w-full bg-C8F0D7  rounded-4xl">
              <div className="flex gap-2 items-center">
                <p className=" lg:flex justify-center items-center h-8 w-10 bg-22C55E rounded-4xl text-white">
                  2
                </p>
                <h2 className="text-22C55E font-bold text-base">Done</h2>
              </div>
              <button
                className=""
                onClick={() => {
                  alert("Crie sua task");
                }}
              >
                <i className="fa-solid fa-plus text-2xl text-22C55E"></i>
              </button>
            </div>
            <div className="div-scroll-done lg:flex flex-col gap-5 h-full pr-1  overflow-y-auto ">
              {/* Card  */}
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>

        <div className="in-this-project lg:h-h-538 w-w-18.63 bg-6C7D96  rounded-4xl ml-10">
          Hello
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kanban;
