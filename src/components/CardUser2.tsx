import React from "react";
import { useState, useEffect } from "react";
import { CardFetch } from "../hooks/CardService";
import { Task } from "../types/Task";

interface imgProp {
  img: string;
  id: number;
}

const CardUser: React.FC<imgProp> = ({ img, id }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadFetch = async () => {
      try {
        const data = await CardFetch();
        setTasks(data);
      } catch (err) {
        throw new Error("Task não encontrada" + err);
      }
    };

    loadFetch();
  });

  return (
    <div className="card-user flex items-center gap-2 w-full h-10 pl-2 pt-1 pb-1 bg-F6F6F6 rounded-2xl shadow-lg">
      <figure>
        <img className="w-7 h-7" src={img} alt="img-user" />
      </figure>
      <div>
        <h2 className="text-10px font-bold">{"name"}</h2>
        <p className="text-5px text-color-btn font-bold">{"project"}</p>
      </div>
    </div>
  );
};

export default CardUser;
