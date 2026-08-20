export const fundamentalSection = {
  title: "Fundamentals",
  slug: "fundamentals",
  description: "Core JavaScript concepts used in nearly every program.",
  lessons: [
    {
      title: "Variables",
      slug: "variables",
      description:
        "Learn how variables store references to values and how var, let, and const differ.",
      definition:
        "A variable is a named binding that allows JavaScript code to access a stored value.",
      mentalModel:
        "Think of a variable name as a label that lets your program refer to a value. Reassignment changes what the binding refers to.",
      keyPoints: [
        "let allows reassignment.",
        "const prevents rebinding but does not make objects immutable.",
        "var is function-scoped and has older semantics.",
        "Variables are created in lexical environments.",
      ],
      syntax: `let score = 10;
score = 20;

const name = "Anish";`,
      examples: [
        {
          title: "let and reassignment",
          description: "Change a value after declaration.",
          explanation: "let bindings can be reassigned.",
          code: `let score = 10;
score = 20;
console.log(score);`,
        },
        {
          title: "const and objects",
          description: "Change an object property.",
          explanation: "const prevents rebinding, not object mutation.",
          code: `const user = { name: "Anish" };
user.name = "Alex";
console.log(user);`,
        },
      ],
      commonMistake:
        "Using const when you expect to reassign the variable, or assuming const makes an object deeply immutable.",
      commonMistakeExplanation:
        "Choose const by default for bindings that should not be reassigned, and let when reassignment is intentional.",
      interviewQuestion: "What is the difference between let and const?",
      interviewAnswer:
        "let allows reassignment; const creates a binding that cannot be reassigned, although referenced objects can still be mutated.",
      practiceTask:
        "Create a counter with let and a user object with const. Update both appropriately.",
      practiceHint:
        "Reassign the number but mutate an object property instead of rebinding the object.",
      practiceSolution: `let count = 0;
count += 1;

const user = { name: "Anish" };
user.name = "Developer";

console.log(count, user);`,
      playgroundCode: `let score = 10;
console.log("Initial:", score);

score = 25;
console.log("Updated:", score);

const profile = { role: "Student" };
profile.role = "Developer";
console.log(profile);`,
      resources: {
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations",
        javascriptInfo: "https://javascript.info/variables",
      },
    },
    {
      title: "Data Types",
      slug: "data-types",
      description:
        "Understand primitive values, objects, typeof, null, undefined, and type behavior.",
      definition:
        "JavaScript values belong to primitive types or are objects. Primitives include string, number, bigint, boolean, symbol, undefined, and null.",
      mentalModel:
        "Think of primitives as direct values and objects as compound structures that can contain properties and behavior.",
      keyPoints: [
        "Primitive types are immutable values.",
        "Objects include arrays and functions.",
        "typeof null is historically 'object'.",
        "undefined usually represents an unassigned value.",
      ],
      syntax: `const name = "JavaScript";
const count = 42;
const active = true;
const empty = null;
let pending;`,
      examples: [
        {
          title: "Inspecting types",
          description: "Use typeof to inspect common values.",
          explanation:
            "typeof is useful but has special cases such as null and arrays.",
          code: `console.log(typeof "JavaScript");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);`,
        },
        {
          title: "Primitive versus object",
          description: "Compare a primitive with an object.",
          explanation: "Objects can hold multiple properties.",
          code: `const text = "Hello";
const user = { name: "Anish" };

console.log(typeof text);
console.log(typeof user);`,
        },
      ],
      commonMistake:
        "Expecting typeof null to return 'null' or typeof [] to return 'array'.",
      commonMistakeExplanation:
        "Use Array.isArray() for arrays and explicitly compare against null when required.",
      interviewQuestion: "What are JavaScript primitive data types?",
      interviewAnswer:
        "JavaScript has string, number, bigint, boolean, symbol, undefined, and null as primitive types; other values are objects.",
      practiceTask:
        "Create one value for each primitive type and inspect them.",
      practiceHint: "Use typeof, but remember the null special case.",
      practiceSolution: `const values = ["text", 10, 10n, true, Symbol("id"), undefined, null];
values.forEach(value => console.log(value, typeof value));`,
      playgroundCode: `const values = {
  text: "Hello",
  number: 42,
  boolean: true,
  empty: null,
  missing: undefined
};

for (const key in values) {
  console.log(key, typeof values[key]);
}`,
      resources: {
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures",
        javascriptInfo: "https://javascript.info/types",
      },
    },
    {
      title: "Functions",
      slug: "functions",
      description:
        "Learn how functions encapsulate reusable behavior, accept parameters, and return values.",
      definition:
        "A function is a callable JavaScript object that can receive arguments, execute statements, and optionally return a value.",
      mentalModel:
        "Think of a function as a reusable machine: inputs enter through parameters, processing happens in the body, and return sends a result back.",
      keyPoints: [
        "Functions are first-class objects.",
        "Parameters are local bindings.",
        "A missing return produces undefined.",
        "Functions can be declared, expressed, or written as arrows.",
      ],
      syntax: `function add(a, b) {
  return a + b;
}

const result = add(2, 3);`,
      examples: [
        {
          title: "Declaration and return",
          description: "Define and call a reusable function.",
          explanation: "return ends the function and supplies a result.",
          code: `function add(a, b) {
  return a + b;
}

console.log(add(2, 3));`,
        },
        {
          title: "Arrow function",
          description: "Store a function in a variable.",
          explanation: "Arrow functions provide a compact function syntax.",
          code: `const square = number => number * number;

console.log(square(5));`,
        },
      ],
      commonMistake:
        "Logging a value inside a function and expecting console.log(functionCall) to receive that value.",
      commonMistakeExplanation:
        "console.log displays output but return supplies a value to the caller.",
      interviewQuestion:
        "What is the difference between a parameter and an argument?",
      interviewAnswer:
        "A parameter is the local variable named in a function definition; an argument is the actual value supplied when calling the function.",
      practiceTask:
        "Create a function that receives a price and discount percentage and returns the discounted price.",
      practiceHint:
        "Calculate the discount first, then subtract it from the price.",
      practiceSolution: `function discountedPrice(price, discount) {
  return price - (price * discount) / 100;
}

console.log(discountedPrice(1000, 20));`,
      playgroundCode: `function greet(name) {
  return "Hello, " + name + "!";
}

const message = greet("Anish");
console.log(message);`,
      resources: {
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
        javascriptInfo: "https://javascript.info/function-basics",
      },
    },
    {
      title: "Control Flow",
      slug: "control-flow",
      description:
        "Learn how conditions, loops, break, continue, and switch control which code executes.",
      definition:
        "Control flow determines the order in which JavaScript statements execute based on conditions and repetition.",
      mentalModel:
        "Think of control flow as routing: conditions choose a path and loops repeat a path until a stopping rule is met.",
      keyPoints: [
        "if chooses based on truthiness.",
        "switch compares cases.",
        "for and while repeat code.",
        "break exits a loop or switch.",
        "continue skips the current iteration.",
      ],
      syntax: `const age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`,
      examples: [
        {
          title: "if else",
          description: "Choose between two branches.",
          explanation: "Only the branch whose condition applies executes.",
          code: `const score = 75;

if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}`,
        },
        {
          title: "for loop",
          description: "Repeat using a counter.",
          explanation:
            "The initializer, condition, and update control iteration.",
          code: `for (let i = 0; i < 3; i++) {
  console.log(i);
}`,
        },
      ],
      commonMistake:
        "Creating an infinite loop because the loop condition never becomes false.",
      commonMistakeExplanation:
        "Ensure the loop state changes toward termination.",
      interviewQuestion: "What is the difference between break and continue?",
      interviewAnswer:
        "break exits the nearest loop or switch; continue skips the remaining work in the current loop iteration and moves to the next iteration.",
      practiceTask: "Print numbers 1 through 10 but skip 5 and stop after 8.",
      practiceHint:
        "Use continue for 5 and break after the stopping condition.",
      practiceSolution: `for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  if (i > 8) break;
  console.log(i);
}`,
      playgroundCode: `for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}`,
      resources: {
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling",
        javascriptInfo: "https://javascript.info/ifelse",
      },
    },
  ],
};
