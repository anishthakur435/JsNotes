export const objectSection = {
  title: "Objects",
  slug: "objects",
  description:
    "Understand JavaScript objects, properties, methods, this, and destructuring.",
  lessons: [
    {
      title: "Objects Basics",
      slug: "objects-basics",
      description:
        "Learn object literals, properties, methods, references, and property access.",
      definition:
        "An object is a collection of properties, where each property associates a key with a value.",
      mentalModel:
        "Think of an object as a labeled record: instead of positions like an array, values are accessed by meaningful keys.",
      keyPoints: [
        "Objects store key-value pairs.",
        "Dot notation uses known property names.",
        "Bracket notation supports dynamic keys.",
        "Object variables hold references.",
      ],
      syntax: `const user = {
  name: "Anish",
  role: "Developer"
};

console.log(user.name);`,
      examples: [
        {
          title: "Access properties",
          description: "Read values with dot and bracket notation.",
          explanation: "Bracket notation is useful for dynamic property names.",
          code: `const user = { name: "Anish", role: "Developer" };

console.log(user.name);
console.log(user["role"]);`,
        },
        {
          title: "Add and update",
          description: "Modify object properties.",
          explanation: "Objects are mutable.",
          code: `const user = { name: "Anish" };
user.role = "Developer";
user.name = "Alex";
console.log(user);`,
        },
      ],
      commonMistake: "Assuming object assignment creates a deep copy.",
      commonMistakeExplanation:
        "Assigning an object variable normally copies the reference, so both variables can refer to the same object.",
      interviewQuestion:
        "What is the difference between dot notation and bracket notation?",
      interviewAnswer:
        "Dot notation uses a literal property identifier; bracket notation evaluates an expression and supports dynamic keys.",
      practiceTask:
        "Create a product object, update its price, and add an inStock property.",
      practiceHint: "Use assignment with object.property.",
      practiceSolution: `const product = { name: "Keyboard", price: 1000 };
product.price = 1200;
product.inStock = true;
console.log(product);`,
      playgroundCode: `const user = { name: "Anish", role: "Student" };
console.log(user);
user.role = "Developer";
console.log(user);`,
      resources: {
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects",
        javascriptInfo: "https://javascript.info/object",
      },
    },
    {
      title: "Object Methods and this",
      slug: "object-methods-this",

      description:
        "Learn how objects contain behavior through methods and how this depends on call context.",

      definition:
        "A method is a function stored as an object property. In many method calls, this refers to the object used as the call base.",

      mentalModel:
        "Think of this as context supplied by how a function is called, rather than a permanent property of the function.",

      keyPoints: [
        "Methods are function-valued properties.",
        "this depends on call syntax in ordinary functions.",
        "Arrow functions do not create their own this binding.",
        "Extracting a method can lose its original call context.",
      ],

      syntax: `const user = {
  name: "Anish",

  greet() {
    console.log(this.name);
  }
};

user.greet();`,

      examples: [
        {
          title: "Method call",

          description: "Use this inside an object method.",

          explanation:
            "Calling user.greet() provides user as the method call context.",

          code: `const user = {
  name: "Anish",

  greet() {
    return "Hello " + this.name;
  }
};

console.log(user.greet());`,
        },

        {
          title: "Lost context",

          description: "Extract a method reference.",

          explanation:
            "The original object is not automatically retained by an ordinary function.",

          code: `const user = {
  name: "Anish",

  getName() {
    return this.name;
  }
};

const fn = user.getName;

// fn is now a separate function reference.
// Calling fn() is not the same as user.getName().`,
        },
      ],

      commonMistake:
        "Using an arrow function when you expect the object method to receive its own this.",

      commonMistakeExplanation:
        "Arrow functions capture lexical this instead of receiving this from the method call.",

      interviewQuestion: "How is this determined in JavaScript?",

      interviewAnswer:
        "For ordinary functions, this commonly depends on how the function is called. In a method call such as obj.method(), this is usually obj.",

      practiceTask:
        "Create an object with a name and a method that returns a greeting using this.",

      practiceHint: "Use method shorthand and return this.name.",

      practiceSolution: `const user = {
  name: "Anish",

  greet() {
    return \`Hello \${this.name}\`;
  }
};

console.log(user.greet());`,

      playgroundCode: `const account = {
  owner: "Anish",
  balance: 500,

  showBalance() {
    console.log(this.owner, this.balance);
  }
};

account.showBalance();`,

      resources: {
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this",

        javascriptInfo: "https://javascript.info/object-methods",
      },
    },
  ],
};
