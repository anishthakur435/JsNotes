import Link from "next/link";
import { curriculum } from "@/lib/curriculum";

export default function LearnPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* Page Header */}
      <section className="">
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Learn JavaScript
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          JavaScript is a versatile, dynamically typed programming language that
          brings life to web pages by making them interactive. It is used for
          building interactive web applications and supports both client-side
          and server-side development.
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 text-sm font-extrabold underline"
          >
            Read more...
          </Link>
        </p>
      </section>
      {/*  */}

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
