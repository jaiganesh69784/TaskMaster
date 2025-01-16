import { TaskManager } from './models/Task';

const taskManager = new TaskManager();

// Add some sample tasks
console.log('Adding tasks...');
taskManager.addTask('Learn TypeScript');
taskManager.addTask('Create a simple project');
taskManager.addTask('Push to GitHub');

// List all tasks
console.log('\nAll tasks:');
console.log(taskManager.listTasks());

// Toggle a task
console.log('\nToggling task 1...');
taskManager.toggleTask(1);

// List updated tasks
console.log('\nUpdated tasks:');
console.log(taskManager.listTasks());