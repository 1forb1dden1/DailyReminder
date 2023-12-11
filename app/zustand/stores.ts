import { create } from 'zustand';

interface TaskStore {
  tasks: string[];
  setTasks: (newTasks: string[]) => void;
  completed: boolean[];
  setCompleted: (value: (prevCompleted: boolean[]) => boolean[]) => void;
}

const taskStore = create<TaskStore>((set) => ({
  tasks: [],
  setTasks: (newTasks: string[]) => set({ tasks: newTasks }),
  completed: [],
  setCompleted: (value: (prevCompleted: boolean[]) => boolean[]) =>
    set((state) => ({ completed: value(state.completed) })),
}));

export default taskStore;
