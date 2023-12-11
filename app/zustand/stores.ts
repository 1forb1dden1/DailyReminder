import { create } from 'zustand';

interface TaskStore {
    tasks: string[];
    setTasks: (newTasks: string[]) => void;
  }
  
  const taskStore = create<TaskStore>((set) => ({
    tasks: [],
    setTasks: (newTasks: string[]) => set({ tasks: newTasks }),
  }));
  
  export default taskStore;