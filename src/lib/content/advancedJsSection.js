export const advancedJsSection = {
  title: "Advanced JavaScript",
  slug: "advanced-javascript",
  description:
    "Explore execution, scope, closures, hoisting, TDZ, and the call stack.",
  lessons: [
    {
      title: "Scope and Lexical Environment",
      slug: "scope",
      description:
        "Understand global, function, and block scope and how lexical lookup works.",
      definition:
        "Scope determines where bindings can be accessed. Lexical scope is determined by where code is written.",
      mentalModel:
        "Think of nested scopes as nested rooms: inner code can look outward for variables, but outer code cannot directly look into inner rooms.",
      keyPoints: [
        "let and const are block-scoped.",
        "var is function-scoped.",
        "Nested functions can access outer lexical bindings.",
        "Lookup proceeds outward through lexical environments.",
      ],
      syntax: `const globalValue = "outside";

function outer() {
  const outerValue = "outer";

  function inner() {
    console.log(globalValue, outerValue);
  }

  inner();
}`,
      examples: [
        {
          title: "Block scope",
          description: "Compare let with block boundaries.",
          explanation:
            "A let binding declared inside a block is unavailable outside.",
          code: `if (true) {
  const secret = "inside";
  console.log(secret);
}

// secret is not accessible here.`,
        },
        {
          title: "Lexical lookup",
          description: "Access an outer variable from an inner function.",
          explanation:
            "The inner function resolves the name through its lexical environment.",
          code: `function outer() {
  const message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();`,
        },
      ],
      commonMistake:
        "Confusing where a function is called with where a variable is declared when reasoning about lexical scope.",
      commonMistakeExplanation:
        "For normal lexical variable lookup, start from the code's declaration location and move outward.",
      interviewQuestion: "What is lexical scope?",
      interviewAnswer:
        "Lexical scope means variable visibility is based on the physical nesting structure of code when it is written.",
      practiceTask:
        "Create nested functions where the inner function uses variables from both its own and its parent scope.",
      practiceHint: "Declare one variable in each scope.",
      practiceSolution: `function outer() {
  const outerValue = "outer";

  function inner() {
    const innerValue = "inner";
    console.log(outerValue, innerValue);
  }

  inner();
}

outer();`,
      playgroundCode: `const app = "JSNotes";

function learn() {
  const topic = "Scope";

  function explain() {
    console.log(app, topic);
  }

  explain();
}

learn();`,
      resources: {
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope",
        javascriptInfo: "https://javascript.info/closure",
      },
    },
    {
      title: "Closures",
      slug: "closures",
      description:
        "Learn how functions can retain access to lexical variables after an outer function has returned.",
      definition:
        "A closure is a function together with access to its surrounding lexical environment.",
      mentalModel:
        "Think of a closure as a function carrying a persistent connection to the variables around where it was created.",
      keyPoints: [
        "Closures arise naturally from lexical scope.",
        "Each closure can preserve its own environment.",
        "Closures support private state and factories.",
        "A closure does not copy every value; it accesses lexical bindings.",
      ],
      syntax: `function createCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();`,
      examples: [
        {
          title: "Private counter",
          description: "Preserve state across calls.",
          explanation: "The returned function continues to access count.",
          code: `function createCounter() {
  let count = 0;

  return () => ++count;
}

const counter = createCounter();

console.log(counter());
console.log(counter());`,
        },
        {
          title: "Function factory",
          description: "Create specialized functions.",
          explanation: "Each returned function closes over its own multiplier.",
          code: `function multiplyBy(multiplier) {
  return number => number * multiplier;
}

const double = multiplyBy(2);
console.log(double(5));`,
        },
      ],
      commonMistake:
        "Thinking a closure only exists when an outer function has already returned.",
      commonMistakeExplanation:
        "Closures are about a function's lexical environment; returning the function is a common way to observe persistent access.",
      interviewQuestion: "What is a closure and where is it useful?",
      interviewAnswer:
        "A closure is a function with access to its lexical environment. It is useful for private state, callbacks, factories, and encapsulation.",
      practiceTask:
        "Create a function that returns a function adding a fixed number to future inputs.",
      practiceHint: "Store the fixed number in the outer function parameter.",
      practiceSolution: `function addBy(amount) {
  return number => number + amount;
}

const addTen = addBy(10);
console.log(addTen(5));`,
      playgroundCode: `function createCounter() {
  let count = 0;

  return () => {
    count += 1;
    console.log(count);
  };
}

const counter = createCounter();
counter();
counter();
counter();`,
      resources: {
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures",
        javascriptInfo: "https://javascript.info/closure",
      },
    },
    {
      title: "Hoisting and TDZ",
      slug: "hoisting-tdz",
      description:
        "Understand declaration processing, var initialization behavior, and the temporal dead zone for let and const.",
      definition:
        "Hoisting is an informal term for declaration behavior during execution setup. let and const bindings exist before execution reaches their declaration but cannot be accessed during the temporal dead zone.",
      mentalModel:
        "Think of execution setup as preparing bindings before statements run, with different access rules for var versus let and const.",
      keyPoints: [
        "Function declarations are callable before their textual declaration in their scope.",
        "var is initialized to undefined.",
        "let and const are inaccessible before initialization.",
        "The TDZ lasts from scope creation until initialization executes.",
      ],
      syntax: `console.log(value);
var value = 10;

// console.log(name); // ReferenceError
let name = "Anish";`,
      examples: [
        {
          title: "var behavior",
          description: "Read a var binding before assignment.",
          explanation: "The binding exists and initially contains undefined.",
          code: `console.log(value);
var value = 10;`,
        },
        {
          title: "TDZ",
          description: "Attempt to read let before initialization.",
          explanation:
            "The binding exists but access is prohibited until initialization.",
          code: `// console.log(name);
let name = "Anish";

console.log(name);`,
        },
      ],
      commonMistake:
        "Explaining hoisting as JavaScript literally moving source code upward.",
      commonMistakeExplanation:
        "The source code is not physically moved; the term describes environment setup and initialization behavior.",
      interviewQuestion: "What is the temporal dead zone?",
      interviewAnswer:
        "It is the period from entering a scope until a let or const binding is initialized, during which accessing that binding throws a ReferenceError.",
      practiceTask:
        "Predict the output of a var declaration before assignment and compare it with let.",
      practiceHint:
        "Test var safely and keep the pre-let access commented after understanding the ReferenceError.",
      practiceSolution: `console.log(value);
var value = 5;

let name = "Anish";
console.log(name);`,
      playgroundCode: `console.log("var before assignment:", value);
var value = 10;

let topic = "TDZ";
console.log("let after initialization:", topic);`,
      resources: {
        mdn: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting",
        javascriptInfo: "https://javascript.info/var",
      },
    },
    {
      title: "Call Stack and Recursion",
      slug: "call-stack-recursion",
      description:
        "Learn how JavaScript tracks active function calls and how recursive functions repeatedly call themselves.",
      definition:
        "The call stack is the runtime structure that tracks active execution contexts. Recursion occurs when a function calls itself until a base condition stops further calls.",
      mentalModel:
        "Think of the call stack as stacked plates: the newest function call finishes first and is removed before the caller continues.",
      keyPoints: [
        "JavaScript executes synchronous calls in stack order.",
        "Each call creates an execution context.",
        "Recursion requires a base case.",
        "Excessive recursion can overflow the call stack.",
      ],
      syntax: `function countdown(n) {
  if (n === 0) return;

  console.log(n);
  countdown(n - 1);
}

countdown(3);`,
      examples: [
        {
          title: "Stack order",
          description: "Observe nested calls.",
          explanation:
            "The innermost active call completes before its caller resumes.",
          code: `function first() {
  console.log("first start");
  second();
  console.log("first end");
}

function second() {
  console.log("second");
}

first();`,
        },
        {
          title: "Recursive factorial",
          description: "Use a base case and recursive step.",
          explanation: "Each call waits for the smaller call to return.",
          code: `function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));`,
        },
      ],
      commonMistake: "Writing recursion without a reachable base case.",
      commonMistakeExplanation:
        "Every recursive path must eventually stop or stack growth continues until failure.",
      interviewQuestion: "What is the call stack?",
      interviewAnswer:
        "The call stack tracks currently executing function calls. New calls are pushed and completed calls are removed, following last-in-first-out behavior.",
      practiceTask:
        "Write a recursive function that sums numbers from n down to 1.",
      practiceHint: "Use n === 0 as the base case.",
      practiceSolution: `function sumTo(n) {
  if (n === 0) return 0;
  return n + sumTo(n - 1);
}

console.log(sumTo(5));`,
      playgroundCode: `function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1);
}

countdown(5);`,
      resources: {
        mdn: "https://developer.mozilla.org/en-US/docs/Glossary/Call_stack",
        javascriptInfo: "https://javascript.info/recursion",
      },
    },
  ],
};
