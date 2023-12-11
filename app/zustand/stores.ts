import { create } from 'zustand';

interface TaskStore {
    tasks: string[];
    setTasks: (newTasks: string[]) => void;
    completed: number;
    increment: () => void;
  }
  
  const taskStore = create<TaskStore>((set) => ({
    tasks: [],
    setTasks: (newTasks: string[]) => set({ tasks: newTasks }),
    completed:0,
    increment: () => set((state) => ({ completed: state.completed + 1 })),
  }));
  
  export default taskStore;