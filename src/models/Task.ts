export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export class TaskManager {
  private tasks: Task[] = [];
  private nextId: number = 1;

  addTask(title: string): Task {
    const task: Task = {
      id: this.nextId++,
      title,
      completed: false
    };
    this.tasks.push(task);
    return task;
  }

  listTasks(): Task[] {
    return this.tasks;
  }

  toggleTask(id: number): Task | undefined {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
    return task;
  }
}