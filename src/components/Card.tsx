import { useEffect, useState } from "react";
import { CardFetch } from "../hooks/CardService";
import { Task } from "../types/Task";
import ProgressBar from "@ramonak/react-progress-bar";
import avatar5 from "/img/avatar/Avatar 5.svg";
import avatar6 from "/img/avatar/Avatar 6.svg";

const Card = ({ value, img, color, id }) => {
  const [task, setTaks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loaldCard = async () => {
      try {
        const data = await CardFetch();
        setTaks(data);
      } catch (err) {
        setError("Erro ao carregar usuários");
      } finally {
        setLoading(false);
      }
    };

    loaldCard();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  // const [idProp, seTId] = useState(id);

  // useEffect(() => {
  //   const dbJson = async (): Promise<void> => {
  //     try {
  //       const response = await fetch("http://localhost:3001/tasks");
  //       if (!response.ok) {
  //         throw new Error(`Erro na requisição: ${response.status}`);
  //       }
  //       const tasks = await response.json();
  //       setData(tasks[id]);
  //     } catch {}
  //   };

  //   dbJson();
  // }, [data]);

  const image = img;
  let mid;
  let high;
  let low;
  // const progress: number = 65;

  function typePerformance() {
    if (task[id].priority == "mid") {
      return (mid = (
        <p className="flex justify-center items-center h-6 w-9 bg-FCE7C2 rounded-full text-xs font-semibold text-F59E0B">
          Mid
        </p>
      ));
    } else if (task[id].priority == "high") {
      return (high = (
        <p className="flex justify-center items-center h-6 w-9 bg-red-600 rounded-full text-xs font-semibold text-white">
          High
        </p>
      ));
    } else if (task[id].priority == "low") {
      return (low = (
        <p className="flex justify-center items-center h-6 w-9 bg-D3D1F8 rounded-full text-xs font-semibold text-4F46E5">
          Low
        </p>
      ));
    }
  }

  return (
    <div className="div-card w-w-278 p-3 bg-white rounded-3xl">
      <div className=" flex flex-col gap-4 h-full w-full">
        {/* <img src={image} alt="" /> */}

        {typePerformance()}

        <h3 className="text-base font-bold">{task[id].title}</h3>

        {/* <h3 className="text-base font-bold"></h3> */}
        <div className="">
          <div className="flex justify-between text-sm mb-2">
            <p className="text-475569 font-medium">Progress</p>{" "}
            <p className="font-bold">{`${task[id].progress}%`}</p>
          </div>
          {/* barra progresso */}
          <ProgressBar
            bgColor={color}
            isLabelVisible={false}
            height="8px"
            completed={task[id].progress}
          />
        </div>
        <div className="container-avatar-coment-done flex justify-between items-center text-base">
          <div className="flex relative">
            <img className="" src={avatar5} alt="avatar" />
            <img className=" absolute left-6" src={avatar6} alt="avatar" />
          </div>

          <div className="container-comment-done flex gap-4">
            <div className="div-comment flex items-center gap-1">
              <i className="fa-solid fa-comment-dots text-475569"></i>
              <p className=" font-semibold">{task[id].numberOfComments}</p>
            </div>
            <div className="div-done flex items-center gap-1">
              <i className="fa-solid fa-circle-check text-475569"></i>
              <p className=" font-semibold">
                {task[id].numberOfTasksCompleted}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
