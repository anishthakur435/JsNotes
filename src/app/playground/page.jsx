import Playground from "@/components/playground/Playground";
import { curriculum } from "@/lib/curriculum";

const defaultCode = `const message = "Hello, JavaScript!";
console.log(message);`;

export default async function PlaygroundPage({ searchParams }) {
  const params = await searchParams;
  const sectionSlug = params.section;
  const lessonSlug = params.lesson;
  const exampleIndex = Number(params.example);
  const sectionData = curriculum.find(
    (section) => section.slug === sectionSlug,
  );
  const lessonData = sectionData?.lessons.find(
    (lesson) => lesson.slug === lessonSlug,
  );
  const exampleData = lessonData?.examples?.[exampleIndex];
  const initialCode = exampleData?.code || defaultCode;

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="max-w-3xl">
        <p className="text-sm font-medium text-gray-500">
          JavaScript Playground
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Experiment with JavaScript
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-500">
          Write JavaScript, run it in your browser, and inspect the output.
        </p>
      </section>

      <div className="mt-12">
        <Playground initialCode={initialCode} />
      </div>
    </main>
  );
}


