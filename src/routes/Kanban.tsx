import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/Card";
import frame4 from "/img/Frame (4).png";
import avatar6 from "/img/avatar/Avatar 6.svg";
import avatar7 from "/img/avatar/Rectangle 10.svg";

const Kanban = () => {
  return (
    <div className="lg:h-screen w-full">
      {/* <Header /> */}
      <Header />
      <main className="lg:flex items-center justify-center h-5/6 w-full bg-white">
        <div className="container-tasks lg:flex items-center justify-center gap-5 h-h-587 w-w-1051  bg-opacity-25 rounded-4xl">
          {/* to-do */}
          <div className="container-to-do lg:flex flex-col items-center gap-4 pb-2 h-h-553 w-w-310  bg-1E293B bg-opacity-10 rounded-4xl">
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
              <Card value={"mid"} color={"#4F46E5"} />
              <Card value={"low"} color={"#4F46E5"} />
              <Card value={"mid"} color={"#4F46E5"} />
            </div>
          </div>
          {/* in-progress */}
          <div className="container-in-progress flex flex-col items-center gap-4 pb-2  lg:h-h-553 w-w-310 bg-1E293B bg-opacity-10 rounded-4xl">
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
              <Card value={"high"} color={"#F59E0B"} />
              <Card value={"high"} color={"#F59E0B"} />
              <Card value={"low"} color={"#F59E0B"} />
            </div>
          </div>
          {/* done */}
          <div className="container-done flex flex-col items-center gap-4 pb-2 lg:h-h-553 w-w-310 bg-1E293B  bg-opacity-10 rounded-4xl">
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
              <Card value={"low"} img={frame4} color={"#22C55E"} />
              <Card value={"low"} img={""} color={"#22C55E"} />
            </div>
          </div>
        </div>

        <div className="in-this-project lg: flex flex-col justify-center items-center h-h-538 w-w-18.63 pt-7 pl-5 pb-7 pr-5 bg-6C7D96  rounded-4xl ml-10">
          <div className="div-project-button-fixed flex justify-between w-full mb-3">
            <h3 className="text-white text-base font-bold">In this project</h3>
            <button>
              <i className="fa-solid fa-thumbtack text-white"></i>
            </button>
          </div>
          {/* container card user */}
          <div className="container-card-user flex flex-col gap-3 w-full">
            <div className="card-user flex items-center gap-4 w-full h-14 pl-2 pt-1 pb-1 bg-F6F6F6 rounded-2xl">
              <figure>
                <img className="w-11 h-11" src={avatar6} alt="img-user" />
              </figure>
              <div>
                <h2 className="text-base font-bold">John Doe</h2>
                <p className="text-8px text-color-btn font-bold">
                  Project Manager
                </p>
              </div>
            </div>

            <div className="card-user flex items-center gap-4 w-full h-14 pl-2 pt-1 pb-1 bg-F6F6F6 rounded-2xl">
              <figure>
                <img className="w-11 h-11" src={avatar7} alt="img-user" />
              </figure>
              <div>
                <h2 className="text-base font-bold">Jane Doe</h2>
                <p className="text-8px text-color-btn font-bold">Analyst</p>
              </div>
            </div>

            <div className="card-user flex items-center gap-4 w-full h-14 pl-2 pt-1 pb-1 bg-F6F6F6 rounded-2xl">
              <figure>
                <img className="w-11 h-11" src={avatar6} alt="img-user" />
              </figure>
              <div>
                <h2 className="text-base font-bold">John Doe</h2>
                <p className="text-8px text-color-btn font-bold">
                  Project Manager
                </p>
              </div>
            </div>
            <p className="flex flex-row-reverse text-8px text-C7C3FFAC w-ful">
              View all (10)
            </p>
          </div>
          {/* teh end container card user */}
          <div className="container-metrics flex flex-col gap-1 w-full">
            <h2 className="text-base font-bold text-white">Metrics</h2>
            <div className="container-cards-metrics flex gap-2">
              <div className="flex flex-col gap-2">
                <div className="total-taks flex flex-col justify-center w-w-135 h-32 p-2 bg-F6F6F6 rounded-2xl text-xs font-bold text-color-btn">
                  <h3>Total tasks</h3>
                  <div className="flex items-center gap-1">
                    <p className="text-2xl">10</p>
                    <p>Todo do</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <p className="text-2xl text-F59E0B">15</p>
                    <p>In progress</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <p className="text-2xl text-22C55E">11</p>
                    <p>Done</p>
                  </div>
                </div>

                <div className="Total-time-estimated flex flex-col justify-center items-center w-w-135 h-h-75 bg-F6F6F6 rounded-2xl">
                  <h3 className="text-xs font-bold text-color-btn">
                    Total time estimated
                  </h3>
                  <p className="text-4xl font-bold text-4F46E5">00:00</p>
                </div>
              </div>
              <div className="most-active w-w-109 h-h-200 p-2 bg-F6F6F6 rounded-2xl">
                <div className="flex flex-col mb-2">
                  <h3 className="text-xs text-color-btn font-bold">
                    Most active
                  </h3>
                  <p className="text-8px text-4F46E5 font-bold">last 30 days</p>
                </div>

                <div className="div-user flex flex-col gap-1 w-full">
                  <div className="card-user flex items-center gap-2 w-full h-10 pl-2 pt-1 pb-1 bg-F6F6F6 rounded-xl shadow-lg">
                    <figure>
                      <img className="w-7 h-7" src={avatar6} alt="img-user" />
                    </figure>
                    <div>
                      <h2 className="text-10px font-bold">John Doe</h2>
                      <p className="text-5px text-color-btn font-bold">
                        Project Manager
                      </p>
                    </div>
                  </div>

                  <div className="card-user flex items-center gap-2 w-full h-10 pl-2 pt-1 pb-1 bg-F6F6F6 rounded-2xl shadow-lg">
                    <figure>
                      <img className="w-7 h-7" src={avatar6} alt="img-user" />
                    </figure>
                    <div>
                      <h2 className="text-10px font-bold">John Doe</h2>
                      <p className="text-5px text-color-btn font-bold">
                        Project Manager
                      </p>
                    </div>
                  </div>

                  <div className="card-user flex items-center gap-2 w-full h-10 pl-2 pt-1 pb-1 bg-F6F6F6 rounded-2xl shadow-lg">
                    <figure>
                      <img className="w-7 h-7" src={avatar6} alt="img-user" />
                    </figure>
                    <div>
                      <h2 className="text-10px font-bold">John Doe</h2>
                      <p className="text-5px text-color-btn font-bold">
                        Project Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kanban;
