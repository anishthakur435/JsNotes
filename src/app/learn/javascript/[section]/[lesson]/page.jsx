import Link from "next/link";
import { notFound } from "next/navigation";
import { curriculum } from "@/lib/curriculum";

export default async function LessonPage({ params }) {
  const { section: sectionSlug, lesson: lessonSlug } = await params;

  const section = curriculum.find((section) => section.slug === sectionSlug);

  if (!section) {
    notFound();
  }

  const lesson = section.lessons.find((lesson) => lesson.slug === lessonSlug);

  if (!lesson) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      {/* Back */}
      <Link
        href={`/learn/javascript/${section.slug}`}
        className="text-sm font-medium text-gray-500 hover:text-black"
      >
        ← Back to {section.title}
      </Link>

      {/* Lesson Header */}
      <section className="mt-8">
        <p className="text-sm font-medium text-gray-500">{section.title}</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          {lesson.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          {lesson.description}
        </p>
      </section>

      {/* Definition */}
      {lesson.definition && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Definition</h2>

          <p className="mt-4 leading-8 text-gray-600">{lesson.definition}</p>
        </section>
      )}

      {/* Mental Model */}
      {lesson.mentalModel && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Mental Model</h2>

          <div className="mt-4 rounded-xl border bg-gray-50 p-6">
            <p className="leading-8 text-gray-700">{lesson.mentalModel}</p>
          </div>
        </section>
      )}

      {/* Key Points */}
      {lesson.keyPoints?.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Key Points</h2>

          <ul className="mt-5 space-y-3">
            {lesson.keyPoints.map((point, index) => (
              <li
                key={`${point}-${index}`}
                className="flex gap-3 leading-7 text-gray-600"
              >
                <span className="font-bold text-black">•</span>

                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Syntax */}
      {lesson.syntax && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Basic Syntax</h2>

          <pre className="mt-5 overflow-x-auto rounded-xl bg-gray-950 p-5 text-sm leading-7 text-gray-100">
            <code>{lesson.syntax}</code>
          </pre>
        </section>
      )}

      {/* Examples */}
      {lesson.examples?.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Examples</h2>

          <div className="mt-6 space-y-8">
            {lesson.examples.map((example, index) => (
              <article key={example.title} className="rounded-xl border p-6">
                <p className="text-sm font-medium text-gray-500">
                  Example {index + 1}
                </p>

                <h3 className="mt-2 text-xl font-semibold">{example.title}</h3>

                {example.description && (
                  <p className="mt-3 leading-7 text-gray-600">
                    {example.description}
                  </p>
                )}

                <pre className="mt-5 overflow-x-auto rounded-lg bg-gray-950 p-5 text-sm leading-7 text-gray-100">
                  <code>{example.code}</code>
                </pre>

                {/* Explanation */}
                {example.explanation && (
                  <div className="mt-5 rounded-lg border bg-gray-50 p-4">
                    <h4 className="font-semibold">How it works</h4>

                    <p className="mt-2 leading-7 text-gray-600">
                      {example.explanation}
                    </p>
                  </div>
                )}

                <Link
                  href={`/playground?section=${section.slug}&lesson=${lesson.slug}&example=${index}`}
                  className="mt-5 inline-block rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
                >
                  Try this example →
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Common Mistake */}
      {lesson.commonMistake && (
        <section className="mt-12 rounded-xl border p-6">
          <h2 className="text-xl font-bold">Common Mistake</h2>

          <p className="mt-4 font-medium leading-7 text-gray-800">
            {lesson.commonMistake}
          </p>

          {lesson.commonMistakeExplanation && (
            <div className="mt-4 border-t pt-4">
              <h3 className="font-semibold">Why this happens</h3>

              <p className="mt-2 leading-7 text-gray-600">
                {lesson.commonMistakeExplanation}
              </p>
            </div>
          )}
        </section>
      )}

      {/* Interview Question */}
      {lesson.interviewQuestion && (
        <section className="mt-6 rounded-xl border p-6">
          <h2 className="text-xl font-bold">Interview Question</h2>

          <p className="mt-4 font-medium leading-7 text-gray-800">
            {lesson.interviewQuestion}
          </p>

          {lesson.interviewAnswer && (
            <div className="mt-5 rounded-lg bg-gray-50 p-5">
              <h3 className="font-semibold">Answer</h3>

              <p className="mt-2 leading-7 text-gray-600">
                {lesson.interviewAnswer}
              </p>
            </div>
          )}
        </section>
      )}

      {/* Practice */}
      {lesson.practiceTask && (
        <section className="mt-6 rounded-xl border p-6">
          <h2 className="text-xl font-bold">Practice Task</h2>

          <p className="mt-4 leading-7 text-gray-600">{lesson.practiceTask}</p>

          {/* Hint */}
          {lesson.practiceHint && (
            <div className="mt-5 rounded-lg border bg-gray-50 p-5">
              <h3 className="font-semibold">Hint</h3>

              <p className="mt-2 leading-7 text-gray-600">
                {lesson.practiceHint}
              </p>
            </div>
          )}

          <Link
            href={`/playground?section=${section.slug}&lesson=${lesson.slug}`}
            className="mt-6 inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Practice {lesson.title} →
          </Link>

          {/* Solution */}
          {lesson.practiceSolution && (
            <div className="mt-8">
              <h3 className="text-lg font-bold">Reference Solution</h3>

              <p className="mt-2 text-sm text-gray-500">
                Try solving the task yourself before viewing the solution.
              </p>

              <pre className="mt-4 overflow-x-auto rounded-xl bg-gray-950 p-5 text-sm leading-7 text-gray-100">
                <code>{lesson.practiceSolution}</code>
              </pre>
            </div>
          )}
        </section>
      )}

      {/* Official Resources */}
      {lesson.resources && (
        <section className="mt-12 border-t pt-12">
          <h2 className="text-2xl font-bold">Official References</h2>

          <p className="mt-3 leading-7 text-gray-600">
            Continue learning from the official documentation and detailed
            JavaScript reference material.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {lesson.resources.mdn && (
              <a
                href={lesson.resources.mdn}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border px-5 py-3 text-sm font-medium hover:bg-gray-50"
              >
                Read on MDN ↗
              </a>
            )}

            {lesson.resources.javascriptInfo && (
              <a
                href={lesson.resources.javascriptInfo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border px-5 py-3 text-sm font-medium hover:bg-gray-50"
              >
                Read on JavaScript.info ↗
              </a>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
