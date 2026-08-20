export const arraysSection = {
  title: "Arrays",
  slug: "arrays",
  description:
    "Learn how JavaScript arrays store ordered collections and how to access, update, search, transform, copy, combine, and process array data.",
  lessons: [
    {
      title: "Arrays Basics",
      slug: "arrays-basics",
      description:
        "Learn what arrays are, how indexes and length work, and how to create, access, update, and inspect ordered collections.",
      definition:
        "An array is a special JavaScript object designed to store an ordered collection of values. Each element has a numeric index, normally starting at 0.",
      mentalModel:
        "Think of an array as numbered storage boxes. Indexes identify positions, while length tells you how many positions the array currently contains.",
      keyPoints: [
        "Arrays store ordered collections of values.",
        "Indexes normally start at 0.",
        "The last element is usually array[array.length - 1].",
        "Arrays are mutable, so their contents can be changed.",
        "Arrays can store primitives, objects, functions, and other arrays.",
        "Accessing a missing index returns undefined.",
        "typeof [] returns 'object'; use Array.isArray() to detect arrays.",
        "Assigning a high index can create empty slots.",
      ],
      syntax: `const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
fruits[1] = "Orange";

console.log(fruits.length);
console.log(fruits[fruits.length - 1]);`,
      examples: [
        {
          title: "Creating and accessing arrays",
          description:
            "Create an ordered collection and access values by index.",
          explanation:
            "The first value has index 0, so index 2 accesses the third value.",
          code: `const languages = ["JavaScript", "Python", "Java"];

console.log(languages[0]);
console.log(languages[2]);`,
        },
        {
          title: "Updating an element",
          description: "Assign a new value to an existing index.",
          explanation: "Arrays are mutable, so the original array changes.",
          code: `const numbers = [10, 20, 30];

numbers[1] = 200;

console.log(numbers);`,
        },
        {
          title: "Using length and finding the last element",
          description:
            "Use length to inspect an array and calculate the last index.",
          explanation:
            "Because indexes start at 0, the last index is length - 1.",
          code: `const technologies = ["HTML", "CSS", "JavaScript", "React"];

console.log(technologies.length);
console.log(technologies[technologies.length - 1]);`,
        },
        {
          title: "Missing indexes",
          description: "Read an index that does not exist.",
          explanation:
            "JavaScript returns undefined instead of throwing an error.",
          code: `const values = [10, 20, 30];

console.log(values[10]);`,
        },
        {
          title: "Mixed values and nested arrays",
          description:
            "Arrays can store different types, including other arrays.",
          explanation: "Nested access uses one index for each array level.",
          code: `const data = [
  "JavaScript",
  2026,
  true,
  [1, 2, 3],
  { level: "Advanced" }
];

console.log(data[3][1]);
console.log(data[4].level);`,
        },
        {
          title: "Arrays are objects",
          description: "Check the JavaScript type of an array.",
          explanation:
            "Arrays are specialized objects, so Array.isArray() is the reliable check.",
          code: `const items = [1, 2, 3];

console.log(typeof items);
console.log(Array.isArray(items));`,
        },
        {
          title: "High indexes and empty slots",
          description: "Assign a value beyond the current end of an array.",
          explanation:
            "The length grows and intermediate positions become empty slots.",
          code: `const items = ["A"];

items[4] = "E";

console.log(items);
console.log(items.length);
console.log(items[1]);`,
        },
      ],
      commonMistake:
        "Confusing an index with array length, or expecting typeof to return 'array'.",
      commonMistakeExplanation:
        "For five elements, indexes run from 0 to 4 while length is 5. Use Array.isArray(value) when you need to identify an array.",
      interviewQuestion:
        "What is the difference between an array index and array length, and why does typeof [] return object?",
      interviewAnswer:
        "An index identifies an element position and normally starts at 0. Length represents the collection size and is generally one greater than the highest index. Arrays are specialized JavaScript objects, so typeof returns object.",
      practiceTask:
        "Create an array of five technologies. Print the first, third, last, and total number of items. Replace one item and add one new item.",
      practiceHint:
        "Use indexes 0 and 2, array.length - 1, assignment, and push().",
      practiceSolution: `const technologies = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

console.log(technologies[0]);
console.log(technologies[2]);
console.log(technologies[technologies.length - 1]);
console.log(technologies.length);

technologies[3] = "Next.js";
technologies.push("TypeScript");

console.log(technologies);`,
      playgroundCode: `const technologies = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

console.log("Original:", technologies);
console.log("First:", technologies[0]);
console.log("Third:", technologies[2]);
console.log("Last:", technologies[technologies.length - 1]);
console.log("Length:", technologies.length);

technologies[3] = "Next.js";
technologies.push("TypeScript");

console.log("Updated:", technologies);
console.log("typeof:", typeof technologies);
console.log("Is array:", Array.isArray(technologies));`,
      resources: {
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
        javascriptInfo: "https://javascript.info/array",
      },
    },
    {
      title: "Array Methods",
      slug: "array-methods",
      description:
        "Learn common methods for reading, adding, removing, combining, copying, searching, transforming, reducing, sorting, and evaluating array values.",
      definition:
        "Array methods are built-in functions available on arrays that inspect, modify, search, copy, transform, sort, or process their contents.",
      mentalModel:
        "Think of an array as a collection with a toolbox attached. Some tools mutate the original array, while others return a new array, a single value, an index, or a boolean.",
      keyPoints: [
        "Mutating methods change the original array.",
        "Non-mutating methods return a result without changing the original.",
        "push() and unshift() return a new length.",
        "pop() and shift() return the removed element.",
        "map(), filter(), slice(), concat(), and flat() return new arrays.",
        "includes(), some(), and every() return booleans.",
        "find() returns a matching value and findIndex() returns its index.",
        "Modern methods include toSorted(), toReversed(), and toSpliced().",
      ],
      syntax: `const items = [1, 2, 3];

items.push(4);
items.pop();

console.log(items);`,
      examples: [
        {
          title: "length",
          description: "Read the number of elements.",
          explanation: "length is a property rather than a method.",
          code: `const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.length);`,
        },
        {
          title: "toString(), at(), and join()",
          description: "Convert or access array values.",
          explanation:
            "at() supports negative indexes, while join() lets you choose a separator.",
          code: `const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.toString());
console.log(fruits.at(-1));
console.log(fruits.join(" - "));`,
        },
        {
          title: "push() and pop()",
          description: "Add to and remove from the end.",
          explanation:
            "Both mutate the original array. push returns length; pop returns the removed item.",
          code: `const stack = ["HTML", "CSS"];

console.log(stack.push("JavaScript"));
console.log(stack.pop());
console.log(stack);`,
        },
        {
          title: "shift() and unshift()",
          description: "Remove from and add to the beginning.",
          explanation: "Both mutate the original array.",
          code: `const queue = ["B", "C"];

queue.unshift("A");
console.log(queue);

console.log(queue.shift());
console.log(queue);`,
        },
        {
          title: "Array.isArray() and delete",
          description: "Check arrays and understand sparse arrays.",
          explanation:
            "delete leaves an empty slot and does not reduce length, so splice() is usually preferred for removal.",
          code: `const fruits = ["Apple", "Banana", "Mango"];

console.log(Array.isArray(fruits));

delete fruits[1];

console.log(fruits);
console.log(fruits.length);`,
        },
        {
          title: "concat(), slice(), and copyWithin()",
          description: "Combine, copy, and copy values inside an array.",
          explanation: "concat and slice do not mutate; copyWithin mutates.",
          code: `const a = [1, 2];
const b = [3, 4];

console.log(a.concat(b));
console.log(a.slice(0, 1));

const values = [1, 2, 3, 4, 5];
values.copyWithin(0, 3);
console.log(values);`,
        },
        {
          title: "splice() and toSpliced()",
          description: "Modify an array or create a modified copy.",
          explanation:
            "splice mutates. toSpliced is its non-mutating counterpart.",
          code: `const fruits = ["Apple", "Banana", "Mango"];

const removed = fruits.splice(1, 1, "Orange");
console.log(removed);
console.log(fruits);

const original = ["A", "B", "C"];
const updated = original.toSpliced(1, 1, "X");

console.log(original);
console.log(updated);`,
        },
        {
          title: "flat()",
          description: "Flatten nested arrays.",
          explanation:
            "The optional depth controls how many nested levels are flattened.",
          code: `const values = [1, [2, 3], [4, [5, 6]]];

console.log(values.flat());
console.log(values.flat(2));`,
        },
        {
          title: "indexOf(), lastIndexOf(), and includes()",
          description: "Search for values.",
          explanation:
            "Indexes return -1 when not found; includes returns a boolean.",
          code: `const values = [1, 2, 3, 2, 4];

console.log(values.indexOf(2));
console.log(values.lastIndexOf(2));
console.log(values.includes(3));`,
        },
        {
          title: "find() and findIndex()",
          description: "Search using a condition.",
          explanation:
            "find returns the value; findIndex returns its position.",
          code: `const users = [
  { name: "Anish", age: 22 },
  { name: "John", age: 30 }
];

console.log(users.find(user => user.age > 25));
console.log(users.findIndex(user => user.age > 25));`,
        },
        {
          title: "forEach()",
          description: "Run a callback for every element.",
          explanation:
            "forEach is useful for side effects and does not return a transformed array.",
          code: `const numbers = [1, 2, 3];

numbers.forEach((number, index) => {
  console.log(index, number);
});`,
        },
        {
          title: "map() and filter()",
          description: "Transform values or keep matching values.",
          explanation:
            "Both return new arrays and leave the original unchanged.",
          code: `const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
const even = numbers.filter(n => n % 2 === 0);

console.log(doubled);
console.log(even);
console.log(numbers);`,
        },
        {
          title: "reduce()",
          description: "Accumulate an array into one result.",
          explanation:
            "The accumulator carries the result from one iteration to the next.",
          code: `const numbers = [10, 20, 30];

const total = numbers.reduce(
  (sum, number) => sum + number,
  0
);

console.log(total);`,
        },
        {
          title: "some() and every()",
          description: "Test whether one or all values satisfy a condition.",
          explanation:
            "some needs one match; every needs every value to match.",
          code: `const numbers = [2, 4, 6, 7];

console.log(numbers.some(n => n % 2 !== 0));
console.log(numbers.every(n => n % 2 === 0));`,
        },
        {
          title: "flatMap()",
          description: "Map values and flatten one level.",
          explanation: "It is similar to map() followed by flat(1).",
          code: `const sentences = ["JavaScript is powerful", "Arrays are useful"];

const words = sentences.flatMap(
  sentence => sentence.split(" ")
);

console.log(words);`,
        },
        {
          title: "sort(), reverse(), toSorted(), and toReversed()",
          description: "Order arrays with mutating and non-mutating options.",
          explanation:
            "Numeric sort needs a compare function. The to* methods preserve the original array.",
          code: `const numbers = [100, 2, 25, 10];

const sorted = numbers.toSorted((a, b) => a - b);
const reversed = numbers.toReversed();

console.log(sorted);
console.log(reversed);
console.log(numbers);`,
        },
        {
          title: "Array.from() and Array.of()",
          description: "Create arrays from iterables or arguments.",
          explanation:
            "Array.from converts iterable or array-like data; Array.of creates an array from supplied arguments.",
          code: `console.log(Array.from("JavaScript"));
console.log(Array.from(new Set([1, 1, 2, 3])));
console.log(Array.of(1, 2, 3));
console.log(Array.of(5));`,
        },
      ],
      commonMistake:
        "Assuming every array method returns a new array or returns the updated array.",
      commonMistakeExplanation:
        "Always check both mutation behavior and return type. For example push() returns a number, pop() returns a removed value, map() returns a new array, and includes() returns a boolean.",
      interviewQuestion:
        "What is the difference between mutating and non-mutating array methods?",
      interviewAnswer:
        "Mutating methods directly change the original array, such as push(), pop(), shift(), unshift(), splice(), sort(), reverse(), and copyWithin(). Non-mutating methods preserve the original and return another result, such as map(), filter(), slice(), concat(), flat(), toSorted(), toReversed(), and toSpliced().",
      practiceTask:
        "Starting with [10, 20, 30, 40, 50], add and remove values, copy the array, filter values greater than 25, double every value, calculate the total, search for 30, and sort a separate unsorted array.",
      practiceHint:
        "Use push(), pop(), slice(), filter(), map(), reduce(), includes(), and toSorted().",
      practiceSolution: `const numbers = [10, 20, 30, 40, 50];

numbers.push(60);
numbers.pop();

const copy = numbers.slice();
const greaterThanTwentyFive = numbers.filter(n => n > 25);
const doubled = numbers.map(n => n * 2);
const total = numbers.reduce((sum, n) => sum + n, 0);

console.log(copy);
console.log(greaterThanTwentyFive);
console.log(doubled);
console.log(total);
console.log(numbers.includes(30));

const unsorted = [50, 10, 80, 20, 5];
console.log(unsorted.toSorted((a, b) => a - b));`,
      playgroundCode: `const numbers = [10, 20, 30, 40, 50];

console.log("Original:", numbers);

numbers.push(60);
console.log("After push:", numbers);

numbers.pop();
console.log("After pop:", numbers);

const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

const filtered = numbers.filter(n => n > 25);
console.log("Greater than 25:", filtered);

const total = numbers.reduce((sum, n) => sum + n, 0);
console.log("Total:", total);

console.log("Contains 30:", numbers.includes(30));

const unsorted = [50, 10, 80, 20, 5];
console.log("Sorted copy:", unsorted.toSorted((a, b) => a - b));
console.log("Original unsorted:", unsorted);`,
      resources: {
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
        javascriptInfo: "https://javascript.info/array-methods",
      },
    },
  ],
};
