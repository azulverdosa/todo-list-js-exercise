// Arrays to keep track of each task's state

// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = (title, description) => {
  const task = {
    title,
    description: description,
    complete: false,
    logState() {
      console.log(`${this.title} has ${this.complete ? '' : 'not '}been completed`);
    },
    markCompleted() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask('Clean cat litter', 'Take all the 💩 out of the litter box')
const task2 = newTask('Do Laundry', 'Clean those clothes 😨')
const tasks = [task1, task2]

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);
task1.title
task1.markCompleted();

