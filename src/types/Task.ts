// src/types/Post.ts
export interface Task {
  id?: string;
  priority: string;
  title: string;
  members?: [];
  numberOfComments: number;
  numberOfTasksCompleted: number;
  progress: number;
  startDateTime?: string;
  endDateTime?: string;
  estimatedTimeOfCompletion?: string;
  creator?: string;
}
