const tasks = [
  { id: 1, name: "Upload Image", status: "pending" },
  { id: 2, name: "Process Data", status: "pending" },
  { id: 3, name: "Send Email", status: "pending" },
];

const completedTasks = [];
const failedTasks = [];

function processTasks(taskQueue) {
  let task;
  while ((task = taskQueue.pop()) !== undefined) {
    console.log(`Attempting task: ${task.name}`);
    // Simulate task execution
    const success = Math.random() > 0.3; // 70% chance of success

    if (success) {
      task.status = "completed";
      completedTasks.push(task);
      console.log(`Task ${task.name} COMPLETED.`);
    } else {
      task.status = "failed";
      failedTasks.push(task);
      console.log(`Task ${task.name} FAILED. Will retry later.`);
    }
  }
}

// Clone tasks array to simulate a queue
const taskQueue = [...tasks];
processTasks(taskQueue);

console.log("\n--- Summary ---");
console.log("Original tasks:", tasks);
console.log("Completed tasks:", completedTasks);
console.log("Failed tasks:", failedTasks);
