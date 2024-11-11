import { Outlet, Link } from "react-router-dom";

const CreationModal = () => {
  return (
    <div className="container-creation-modal flex  items-center h-full w-full p-24 bg-black bg-opacity-90 absolute bottom-1">
      {/* create modal */}
      <div className="create-modal flex flex-col gap-3 h-h-584 w-w-1001 pt-4 pr-11 pb-4 pl-11 bg-F6F6F6  rounded-2xl">
        <div className="container-title-exit flex justify-between w-full text-2xl font-semibold">
          <h2 className="text-color-btn">Create new task</h2>
          <button className="">
            <Link to={"/kanban"}>
              <i className="fa-solid fa-xmark text-BD2323"></i>
            </Link>
          </button>
        </div>
        {/* container edit */}
        <div className="container-edit flex gap-20 w-full">
          <div className="conatiner-title-status flex flex-col gap-4 w-w-412 text-14px text-2B2F32 te font-normal">
            <div className="div-title flex flex-col">
              <label className="text-wordColor font-medium  " htmlFor="title">
                Title
              </label>
              <input
                className="h-9 pl-3 rounded-md border-black border-2 border-opacity-10 outline-none hover:border-black"
                type="text"
                name="title"
                id="title"
                placeholder="Enter the title of the task"
              />
            </div>

            <div className="div-status flex flex-col gap-4">
              <h3 className="text-wordColor font-medium">Status</h3>
              <div className="div-checkbox flex  gap-3">
                <div className="flex flex-row-reverse gap-3">
                  <label className="" htmlFor="to-do">
                    To do
                  </label>
                  <input className="" type="checkbox" name="to-do" id="to-do" />
                </div>

                <div className="flex flex-row-reverse gap-3">
                  <label htmlFor="to-do">In progress</label>
                  <input type="checkbox" name="in-progress" id="in-progress" />
                </div>

                <div className="flex flex-row-reverse gap-3">
                  <label htmlFor="to-do">Done</label>
                  <input type="checkbox" name="done" id="done" />
                </div>
              </div>

              <div className="description">
                <label
                  className="text-wordColor font-medium"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="w-full h-28 resize-none pl-3 border-black border-2 rounded-md border-opacity-10 outline-none hover:border-black "
                  name="description"
                  id="description"
                  placeholder="Enter a description"
                ></textarea>
              </div>
              {/* start date */}
              <div className="start-date flex flex-col gap-2">
                <h3 className="text-wordColor font-medium">Start Date</h3>
                <div className="flex gap-4">
                  <div className="date flex items-center pt-2 pr-4 pb-2 pl-4 div-date w-w-185 h-h-52 bg-white rounded-md border-black border-2 border-opacity-10 hover:border-black">
                    {/* <i className="fa-solid fa-calendar-days text-2xl opacity-50"></i> */}
                    <i className="fa-regular fa-calendar-days text-2xl opacity-50"></i>
                    <input
                      className="text-center opacity-50 text-14px outline-none border-none"
                      type="date"
                      name="date"
                      id="date"
                    />
                  </div>
                  <div className="time flex items-center gap-1 w-w-107 h-h-52 pt-2 pr-4 pb-2 pl-4 bg-white rounded-md border-black border-2 border-opacity-10 hover:border-black ">
                    <i className="fa-regular fa-clock text-2xl opacity-50"></i>
                    <input
                      className="text-14px opacity-50 outline-none border-none"
                      type="time"
                      name="time"
                      id="time"
                    />
                  </div>
                </div>
              </div>
              {/* the end start date */}

              {/* end start */}
              <div className="end-date flex flex-col gap-2">
                <h3 className="text-wordColor font-medium">End Date</h3>
                <div className="flex gap-4">
                  <div className="date flex items-center pt-2 pr-4 pb-2 pl-4 div-date w-w-185 h-h-52 bg-white rounded-md border-black border-2 border-opacity-10 hover:border-black">
                    {/* <i className="fa-solid fa-calendar-days text-2xl opacity-50"></i> */}
                    <i className="fa-regular fa-calendar-days text-2xl opacity-50"></i>
                    <input
                      className="text-center opacity-50 text-14px outline-none border-none"
                      type="date"
                      name="date"
                      id="date"
                    />
                  </div>
                  <div className="time flex items-center gap-1 w-w-107 h-h-52 pt-2 pr-4 pb-2 pl-4 bg-white rounded-md border-black border-2 border-opacity-10 hover:border-black">
                    <i className="fa-regular fa-clock text-2xl opacity-50"></i>
                    <input
                      className=" text-14px opacity-50 outline-none border-none"
                      type="time"
                      name="time"
                      id="time"
                    />
                  </div>
                </div>
              </div>
              {/*the end - end start */}
            </div>
          </div>

          {/* task cover */}
          <div className="container-taskCover-addApplel w-w-412">
            <h2 className="text-14px text-wordColor font-medium w-full">
              Task cover
            </h2>
            <p className="flex flex-row-reverse text-10px text-4F46E5 font-medium w-full">
              Optional
            </p>
            <div className="div-upload flex flex-col gap-4 w-full">
              {/* upload */}
              <div className="container-upload flex flex-col gap-2">
                <div className="div-nameImage flex justify-between items-center h-h-50 w-full pt-4 pr-3 pb-4 pl-3 bg-EFF6FF  border-60A5FA border-2 rounded-md text-xl font-normal">
                  <div className="flex justify-center items-center gap-2">
                    <i className="fa-solid fa-paperclip text-6C7D96"></i>
                    <p>imageattachment.jpg</p>
                  </div>
                  <button className="text-6C7D96 ">
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </div>

                <label
                  className="flex flex-col items-center justify-center gap-3 text-base font-normal h-h-152 w-w-412 text-4B5563 bg-EFF6FF bg-opacity-20 border-60A5FA border-dashed border-2 rounded-md"
                  htmlFor="up-file"
                >
                  <i className="fa-solid fa-upload text-xl"></i>
                  <span className="">
                    Drop here to attach or <a href="#">Upload</a>
                  </span>
                  <p className="text-xs">Max size:5GB</p>
                </label>
                <input
                  className=" hidden"
                  type="file"
                  name="up-file"
                  id="up-file"
                />
              </div>
              {/*the end upload */}

              {/* search */}
              <div className="container-search">
                <h3 className="text-base text-wordColor font-medium">
                  Add people
                </h3>
                <div className="div-search flex w-full h-11 bg-white  border-black border-2 border-opacity-10 rounded-md hover:border-black">
                  <button className="w-10 h-10 rounded-l-lg bg-white pl-4">
                    <i className="fa-solid fa-magnifying-glass text-2xl text-4B5563"></i>
                  </button>
                  <input
                    className="w-full h-10 outline-none rounded-r-lg pl-3"
                    type="search"
                    name="search"
                    id="serach"
                    placeholder="Search"
                  />
                </div>
              </div>
              {/* the end search */}

              {/* Priority */}
              <div className="w-full text-14px text-2B2F32  font-normal">
                <h3 className="text-wordColor text-base font-medium">
                  Priority
                </h3>
                <div className="div-checkbox flex  gap-3">
                  <div className="flex flex-row-reverse gap-3">
                    <label className="" htmlFor="to-do">
                      Low
                    </label>
                    <input
                      className=""
                      type="checkbox"
                      name="to-do"
                      id="to-do"
                    />
                  </div>

                  <div className="flex flex-row-reverse gap-3">
                    <label htmlFor="to-do">Low</label>
                    <input
                      type="checkbox"
                      name="in-progress"
                      id="in-progress"
                    />
                  </div>

                  <div className="flex flex-row-reverse gap-3">
                    <label htmlFor="to-do">High</label>
                    <input type="checkbox" name="done" id="done" />
                  </div>
                </div>
              </div>
              {/* Priority */}

              {/* <button className="flex justify-center items-center w-full h-12 text-white bg-color-green rounded-md text-base font-medium mt-8">
                Create!
              </button> */}
              <button className="btn mt-8" data-type="create">
                Create!
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* the end create modal */}
    </div>
  );
};

export default CreationModal;
