import { curriculum } from "@/lib/curriculum";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="border-b px-4 py-20 text-center md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-medium text-gray-500">
            Interactive JavaScript learning
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Learn JavaScript by understanding how it works.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            Explore JavaScript fundamentals, runtime behavior, execution flow,
            examples, and hands-on practice.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/learn"
              className="inline-block rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:opacity-90"
            >
              Start Learning
            </Link>

            <Link
              href="/playground"
              className="inline-block rounded-lg border px-6 py-3 font-medium transition hover:bg-gray-100"
            >
              Open Playground
            </Link>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="border-b px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-500">
              JAVASCRIPT CURRICULUM
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Explore JavaScript step by step
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Start with the fundamentals and gradually move toward deeper
              JavaScript concepts.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {curriculum.map((section, index) => (
              <Link
                key={section.slug}
                href={`/learn/javascript/${section.slug}`}
                className="group rounded-xl border p-6 transition hover:-translate-y-1 hover:bg-gray-50 hover:shadow-md"
              >
                <h3 className="mt-3 text-xl font-semibold group-hover:underline">
                  {section.title}
                </h3>

                {section.description && (
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                    {section.description}
                  </p>
                )}

                <div className="mt-5 flex items-center justify-between border-t pt-4">
                  <span className="text-sm text-gray-400">
                    {section.lessons.length} topics
                  </span>

                  <span className="text-sm font-medium">Explore →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/learn"
              className="inline-flex items-center rounded-lg border px-6 py-3 font-medium transition hover:bg-gray-100"
            >
              View Full Curriculum →
            </Link>
          </div>
        </div>
      </section>

      {/*   */}
      <section className="border-b px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-gray-500">
            INTERACTIVE PLAYGROUND
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Don't just read JavaScript. Run it.
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-500">
            Open the JavaScript playground, experiment with code, inspect
            console output, and practice concepts as you learn them.
          </p>

          <div className="mt-8">
            <Link
              href="/playground"
              className="inline-block rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:opacity-90"
            >
              Open Playground →
            </Link>
          </div>
        </div>
      </section>
      {/* JavaScript Executor */}
      <section className="border-b px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 rounded-xl border p-8 md:grid-cols-2 md:items-center md:p-10">
            <div>
              <p className="text-sm font-medium text-gray-500">
                STANDALONE CODE EXECUTOR
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Test JavaScript without limits.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-gray-500">
                Need a space to experiment outside the curriculum? Open my
                dedicated JavaScript Executor to write, test, and run your own
                JavaScript code.
              </p>

              <div className="mt-6">
                <a
                  href="https://js-executer-by-anish.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:opacity-90"
                >
                  Open JS Executor ↗
                </a>
              </div>
            </div>

            <div className="rounded-lg border p-5">
              <p className="text-sm font-medium text-gray-500">
                What can you do?
              </p>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-600">
                <li>→ Write and execute JavaScript</li>
                <li>→ Test your own code and ideas</li>
                <li>→ Inspect console output</li>
                <li>→ Experiment outside individual lessons</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
