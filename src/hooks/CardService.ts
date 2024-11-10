import { Task } from "../types/Task";

export const CardFetch = async (): Promise<Task[]> => {
  const response = await fetch("http://localhost:3001/tasks");

  if (!response.ok) {
    throw new Error("Erro em busa de task");
  }

  return response.json();
};
