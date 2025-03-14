01. What are the three states of a Promise?

JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier. 
Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states

Pending: The task is in the initial state.
Fulfilled: The task was completed successfully, and the result is available.
Rejected: The task failed, and an error is provided.


02. How does the async keyword affect a function's return value?

In JavaScript, prefixing a function with the async keyword transforms its return value into a Promise. 
This means that regardless of what the function explicitly returns, it will be wrapped in a resolved promise. 
For example, an async function returning a number will actually return a promise that resolves to that number

Example :-  

async function example() {
return 42;
}

example().then(value => console.log(value)); // Outputs: 42


03. Explain the purpose of the await keyword.


In JavaScript, prefixing a function with the async keyword transforms its return value into a Promise. 
This means that regardless of what the function explicitly returns, it will be wrapped in a resolved promise. 
For example, an async function returning a number will actually return a promise that resolves to that number


04. What is a callback function and how is it used in asynchronous operations?

In JavaScript, a callback function is a function passed as an argument to another function, which is then invoked within the outer function to complete a specific task or action. 
This technique allows functions to be flexible and reusable, enabling them to execute additional code in response to certain events or conditions.

Usage in Asynchronous Operations:

Callbacks are fundamental in handling asynchronous operations, such as reading files, making HTTP requests, or setting timers. 
By passing a callback function to an asynchronous operation, you define what should happen once that operation completes, without blocking the execution of subsequent code.


05. Describe the role of the event loop in JavaScript.

In JavaScript, the event loop is a fundamental mechanism that enables the language's non-blocking, asynchronous behavior, allowing it to handle multiple tasks efficiently despite being single-threaded.

How the Event Loop Works:

Call Stack: JavaScript maintains a call stack where functions are added when invoked and removed upon completion.

Web APIs/Node.js APIs: Asynchronous operations (e.g., setTimeout, HTTP requests) are delegated to the browser's Web APIs or Node.js APIs, allowing the main thread to remain unblocked.

Task Queues: Completed asynchronous operations place their callbacks in task queues:

Macrotask Queue: Holds tasks like setTimeout callbacks and I/O events.
Microtask Queue: Contains tasks such as Promise resolutions and process.nextTick callbacks.
Event Loop Cycle:

The event loop continuously checks the call stack.
If the stack is empty, it first processes all tasks in the microtask queue.
Subsequently, it processes one task from the macrotask queue.
This cycle repeats, ensuring timely execution of asynchronous callbacks.


06. Write a function called delayedGreeting that takes a name as an argument and logs a greeting message to the console after a 2-second delay using setTimeout. Use a callback function to achieve this.

function delayedGreeting(name) {
setTimeout(function() {
console.log(`Hello, ${name}!`);
}, 2000);
}


