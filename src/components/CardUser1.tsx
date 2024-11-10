import React from "react";

interface imgProp {
  img: string;
  id: number;
}

const CardUser1: React.FC<imgProp> = ({ img, id }) => {
  return (
    <div className="card-user flex items-center gap-4 w-full h-14 pl-2 pt-1 pb-1 bg-F6F6F6 rounded-2xl">
      <figure>
        <img className="w-11 h-11" src={img} alt="img-user" />
      </figure>
      <div>
        <h2 className="text-base font-bold">John Doe</h2>
        <p className="text-8px text-color-btn font-bold">Project Manager</p>
      </div>
    </div>
  );
};

export default CardUser1;
