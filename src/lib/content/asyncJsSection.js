export const asyncJsSection = {
  title: "Asynchronous JavaScript",
  slug: "async-javascript",
  description:
    "Understand callbacks, promises, async/await, and the event loop.",
  lessons: [
    {
      title: "Callbacks",
      slug: "callbacks",
      description:
        "Learn callback-based asynchronous programming and why callback nesting can become difficult.",
      definition:
        "A callback is a function passed to another function to be invoked later or in response to an event or operation.",
      mentalModel:
        "Think of a callback as leaving instructions: when an operation reaches a particular point, it calls the function you supplied.",
      keyPoints: [
        "Callbacks are ordinary functions.",
        "Timing depends on the API invoking them.",
        "Error-first callback patterns are common in some environments.",
        "Deep nesting can reduce readability.",
      ],
      syntax: `function greet(name, callback) {
  const message = "Hello " + name;
  callback(message);
}

greet("Anish", console.log);`,
      examples: [
        {
          title: "Delayed callback",
          description: "Run a function later.",
          explanation:
            "setTimeout schedules the callback through the host environment.",
          code: `console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 1000);

console.log("End");`,
        },
        {
          title: "Custom callback",
          description: "Pass behavior into a function.",
          explanation:
            "The receiving function decides when to invoke the callback.",
          code: `function process(value, callback) {
  callback(value * 2);
}

process(5, result => console.log(result));`,
        },
      ],
      commonMistake:
        "Assuming asynchronous callbacks block the following synchronous code.",
      commonMistakeExplanation:
        "Scheduling an async callback usually lets synchronous code continue while the operation waits.",
      interviewQuestion: "What is callback hell?",
      interviewAnswer:
        "It describes deeply nested callbacks that make asynchronous control flow difficult to read and maintain.",
      practiceTask:
        "Create a function that doubles a number and sends the result to a callback.",
      practiceHint: "Call the callback with the computed result.",
      practiceSolution: `function double(number, callback) {
  callback(number * 2);
}

double(10, result => console.log(result));`,
      playgroundCode: `console.log("1: Start");

setTimeout(() => {
  console.log("3: Callback");
}, 1000);

console.log("2: End");`,
      resources: {
        mdn: "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function",
        javascriptInfo: "https://javascript.info/callbacks",
      },
    },
    {
      title: "Promises",
      slug: "promises",
      description:
        "Understand promise states, then, catch, chaining, and asynchronous result composition.",
      definition:
        "A Promise represents the eventual completion or failure of an asynchronous operation and its resulting value or reason.",
      mentalModel:
        "Think of a Promise as a container for a future outcome: pending now, eventually fulfilled or rejected.",
      keyPoints: [
        "A promise starts pending.",
        "It settles as fulfilled or rejected.",
        "then handles fulfillment and can transform results.",
        "catch handles rejection.",
        "Returning from then creates chained promise flow.",
      ],
      syntax: `const promise = Promise.resolve("Data");

promise
  .then(value => console.log(value))
  .catch(error => console.error(error));`,
      examples: [
        {
          title: "Create and consume",
          description: "Resolve a promise after asynchronous work.",
          explanation: "The then callback runs when the promise is fulfilled.",
          code: `const promise = new Promise(resolve => {
  setTimeout(() => resolve("Loaded"), 500);
});

promise.then(value => console.log(value));`,
        },
        {
          title: "Chaining",
          description: "Transform results through multiple then calls.",
          explanation: "Each returned value becomes the next chain's input.",
          code: `Promise.resolve(5)
  .then(value => value * 2)
  .then(value => value + 10)
  .then(console.log);`,
        },
      ],
      commonMistake:
        "Forgetting to return a promise or value from a then callback when the next step depends on it.",
      commonMistakeExplanation:
        "Return the value or promise you want the next chain to receive.",
      interviewQuestion: "What are the states of a Promise?",
      interviewAnswer:
        "A Promise begins pending and eventually settles exactly once as fulfilled or rejected.",
      practiceTask:
        "Create a promise that resolves to a user object and log its name.",
      practiceHint: "Resolve an object and access the property inside then.",
      practiceSolution: `const getUser = Promise.resolve({ name: "Anish" });

getUser.then(user => {
  console.log(user.name);
});`,
      playgroundCode: `const loadData = new Promise(resolve => {
  setTimeout(() => resolve("Data loaded"), 500);
});

loadData
  .then(value => console.log(value))
  .catch(error => console.log(error));`,
      resources: {
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
        javascriptInfo: "https://javascript.info/promise-basics",
      },
    },
    {
      title: "Async and Await",
      slug: "async-await",
      description:
        "Use async functions and await to write promise-based code with synchronous-looking control flow.",
      definition:
        "An async function always returns a Promise, and await pauses only the async function's continuation until the awaited promise settles.",
      mentalModel:
        "Think of await as marking a dependency point: this async function waits for that result, while unrelated JavaScript can continue executing.",
      keyPoints: [
        "async functions return promises.",
        "await works with promises and thenables.",
        "Use try/catch for rejected awaited operations.",
        "await does not block the entire JavaScript runtime.",
      ],
      syntax: `async function getData() {
  const value = await Promise.resolve("Loaded");
  return value;
}

getData().then(console.log);`,
      examples: [
        {
          title: "Basic await",
          description: "Await a resolved promise.",
          explanation:
            "Execution of the async function continues after the result is available.",
          code: `async function run() {
  const value = await Promise.resolve(42);
  console.log(value);
}

run();`,
        },
        {
          title: "Error handling",
          description: "Catch promise rejection with try/catch.",
          explanation: "A rejected awaited promise throws at the await point.",
          code: `async function run() {
  try {
    await Promise.reject(new Error("Failed"));
  } catch (error) {
    console.log(error.message);
  }
}

run();`,
        },
      ],
      commonMistake:
        "Assuming an async function returns its raw value directly.",
      commonMistakeExplanation:
        "Even return 42 inside an async function becomes a fulfilled Promise carrying 42.",
      interviewQuestion: "What is the difference between await and then()?",
      interviewAnswer:
        "Both work with promises. await provides syntax that lets promise-based code be written inside an async function in a sequential style, while then attaches continuation callbacks.",
      practiceTask:
        "Write an async function that awaits a Promise resolving to an array and logs the first item.",
      practiceHint: "Create Promise.resolve with an array and await it.",
      practiceSolution: `async function getFirst() {
  const values = await Promise.resolve(["JavaScript", "React"]);
  console.log(values[0]);
}

getFirst();`,
      playgroundCode: `async function loadTopic() {
  console.log("Loading...");

  const topic = await new Promise(resolve => {
    setTimeout(() => resolve("Event Loop"), 500);
  });

  console.log("Loaded:", topic);
}

loadTopic();`,
      resources: {
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",
        javascriptInfo: "https://javascript.info/async-await",
      },
    },
    {
      title: "Event Loop",
      slug: "event-loop",
      description:
        "Understand how synchronous code, tasks, microtasks, timers, and Promise callbacks are coordinated in JavaScript environments.",
      definition:
        "The event loop coordinates execution by allowing asynchronous work to queue callbacks while JavaScript processes the current call stack and scheduled queues.",
      mentalModel:
        "Think of the call stack as the current checkout lane. JavaScript finishes current synchronous work first, then microtasks are processed before the next task such as a timer callback.",
      keyPoints: [
        "Synchronous code runs on the current call stack.",
        "Promise reactions are scheduled as microtasks.",
        "Timer callbacks are tasks/macrotasks in common browser terminology.",
        "A timer delay is a minimum threshold, not a guarantee of exact execution time.",
        "The environment supplies APIs such as timers; the language alone does not perform browser scheduling.",
      ],
      syntax: `console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");`,
      examples: [
        {
          title: "Microtask before timer",
          description: "Compare a resolved Promise with setTimeout.",
          explanation:
            "After synchronous code, the microtask runs before the timer task.",
          code: `console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve()
  .then(() => console.log("Promise"));

console.log("End");`,
        },
        {
          title: "Async function ordering",
          description: "Observe await continuation timing.",
          explanation:
            "Code after await continues asynchronously through promise scheduling.",
          code: `async function run() {
  console.log("Inside start");

  await Promise.resolve();

  console.log("Inside after await");
}

console.log("Before");
run();
console.log("After");`,
        },
      ],
      commonMistake: "Thinking setTimeout(fn, 0) executes immediately.",
      commonMistakeExplanation:
        "It schedules a callback to run later when the stack is clear and scheduling rules allow it.",
      interviewQuestion:
        "Why does a Promise callback often run before setTimeout(..., 0)?",
      interviewAnswer:
        "After current synchronous work completes, the microtask queue is processed before the next task is taken, so Promise reactions run before a queued timer callback in this scenario.",
      practiceTask:
        "Predict and then verify the output order of synchronous logs, Promise.then, and setTimeout.",
      practiceHint:
        "Remember: synchronous code first, then microtasks, then the next task.",
      practiceSolution: `console.log("A");

setTimeout(() => console.log("D"), 0);

Promise.resolve()
  .then(() => console.log("C"));

console.log("B");`,
      playgroundCode: `console.log("1 Start");

setTimeout(() => {
  console.log("4 Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("3 Promise microtask");
});

console.log("2 End");`,
      resources: {
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview#asynchronous_programming",
        javascriptInfo: "https://javascript.info/event-loop",
      },
    },
  ],
};
