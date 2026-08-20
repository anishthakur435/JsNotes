import Link from "next/link";
import { curriculum } from "@/lib/curriculum";

export default function LearnPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* Page Header */}
      <section className="max-w-3xl">
        <p className="text-sm font-medium text-gray-500">
          JavaScript Curriculum
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Learn JavaScript
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-500">
          Build a strong JavaScript foundation by learning the language from its
          core concepts to asynchronous execution.
        </p>
      </section>
      {/*  */}
      {/* What is JavaScript */}
      <section className="mt-12 rounded-xl border p-6 md:p-8">
        <div className="w-full">
          <p className="text-sm font-medium text-gray-500">
            JAVASCRIPT OVERVIEW
          </p>

          <h2 className="mt-3 text-3xl font-bold">What is JavaScript?</h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            JavaScript is a versatile, dynamically typed programming language
            that brings life to web pages by making them interactive. It is used
            for building interactive web applications and supports both
            client-side and server-side development.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Dynamically Typed</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Variable types are determined at runtime, allowing values to
                change type during program execution.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Single-Threaded</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                JavaScript executes code on a single main thread while
                supporting asynchronous operations through the runtime and event
                loop.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Compiled and Interpreted</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Modern JavaScript engines use techniques such as just-in-time
                compilation to optimize code execution and improve performance.
              </p>
            </div>
          </div>

          <div className="py-5 flex flex-wrap gap-3">
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Read JavaScript on MDN ↗
            </Link>

            <Link
              href="https://javascript.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border px-5 py-3 text-sm font-medium transition hover:bg-gray-100"
            >
              JavaScript.info ↗
            </Link>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {curriculum.map((section) => (
          <Link
            key={section.slug}
            href={`/learn/javascript/${section.slug}`}
            className="group flex flex-col rounded-xl border p-6 transition hover:bg-gray-50 hover:shadow-sm"
          >
            <h2 className="text-xl font-semibold group-hover:underline">
              {section.title}
            </h2>

            <p className="mt-3 leading-7 text-gray-500">
              {section.description}
            </p>

            <div className="mt-auto pt-5">
              <p className="text-sm font-medium text-gray-500">
                {section.lessons.length} topics
              </p>
            </div>

            <span className="mt-5 inline-block text-sm font-medium">
              Explore topic →
            </span>
          </Link>
        ))}
      </section>

      {/* Bottom Section */}
      <section className="mt-16 rounded-xl border p-8">
        <h2 className="text-2xl font-bold">Learn. Understand. Practice.</h2>

        <p className="mt-3 max-w-2xl text-gray-500">
          Each topic includes explanations, examples, common mistakes, interview
          questions, and a practice task that you can explore in the JavaScript
          playground.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-black"
          >
            MDN Web Docs ↗
          </a>

          <a
            href="https://javascript.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-black"
          >
            JavaScript.info ↗
          </a>
        </div>
      </section>
    </main>
  );
}
