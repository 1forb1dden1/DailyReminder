import { create } from 'zustand';

interface TaskStore {
  tasks: string[];
  setTasks: (newTasks: string[]) => void;
  completed: boolean[];
  setCompleted: (value: (prevCompleted: boolean[]) => boolean[]) => void;
  complete: number;
  increment: () => void;
  decrement: () => void;
}

const taskStore = create<TaskStore>((set) => ({
  tasks: [],
  setTasks: (newTasks: string[]) => set({ tasks: newTasks }),
  completed: [],
  setCompleted: (value: (prevCompleted: boolean[]) => boolean[]) =>
  set((state) => ({ completed: value(state.completed) })),
  complete:0,
  increment: () => set((state) => ({ complete: state.complete + 1 })),
  decrement: () => set((state) => ({ complete: state.complete - 1 })),
}));

export default taskStore;
