/*
Challenge 7: TypeScript Task Manager
Must-have functions:
1. addTask(name: string)
○ - Creates a task with an auto-incrementing ID.
○ - Enforces string type for the task name.
2. completeTask(id: number)
○ - Finds the task by ID (not array index).
○ - Type-safe status update for the task.
3. displayTasks()
○ - Outputs tasks with type-checked formatting.

Example usage:
const taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.completeTask(1);
taskManager.displayTasks(); //Task ID: 1, Name: "Learn TypeScript", Status:
Completed
*/

class TaskManager {
    private tasks: { id: number; name: string; status: string }[] = [];
    private currentId: number = 1;

    addTask(name: string): void {
        if (typeof name !== 'string') {
            throw new Error('Task name must be of type String')
        }
        const newTask = {id: this.currentId++, name, status: 'Pending'};
        this.tasks.push(newTask);
    }

    completeTask(id: number): void {
        const task = this.tasks.find((task) => task.id === id);
        if (!task) {
            throw new Error(`No task with this ID: ${id}`);
        }
        task.status = 'Completed';
    }

    displayTasks(): void {
        this.tasks.forEach((task) => {
            console.log(`Task ID: ${task.id}, Name: '${task.name}', Status: '${task.status}'`)
        })
    }
}

//testing
const taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.completeTask(1);
taskManager.displayTasks();