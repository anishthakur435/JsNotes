import Link from "next/link";
import { curriculum } from "@/lib/curriculum";

export default function ExamplesPage() {
  const allExamples = curriculum.flatMap((section) =>
    section.lessons.flatMap((lesson) =>
      (lesson.examples || []).map((example, index) => ({
        ...example,
        section,
        lesson,
        index,
      })),
    ),
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="max-w-3xl">
        <p className="text-sm font-medium text-gray-500">JAVASCRIPT EXAMPLES</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Explore JavaScript Examples
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-500">
          Browse practical JavaScript examples from every topic in the
          curriculum.
        </p>
      </section>

      <section className="mt-12 space-y-12">
        {curriculum.map((section) => (
          <div key={section.slug}>
            <div className="border-b pb-4">
              <h2 className="text-2xl font-bold">{section.title}</h2>

              <p className="mt-2 text-gray-500">{section.description}</p>
            </div>

            <div className="mt-8 space-y-6">
              {section.lessons.map((lesson) => (
                <div key={lesson.slug}>
                  {lesson.examples?.map((example, index) => (
                    <article
                      key={`${lesson.slug}-${index}`}
                      className="rounded-xl border p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">
                            {lesson.title}
                          </p>

                          <h3 className="mt-2 text-xl font-semibold">
                            {example.title}
                          </h3>
                        </div>

                        <Link
                          href={`/learn/javascript/${section.slug}/${lesson.slug}`}
                          className="text-sm font-medium text-gray-500 hover:text-black"
                        >
                          Lesson →
                        </Link>
                      </div>

                      <p className="mt-4 leading-7 text-gray-600">
                        {example.description}
                      </p>

                      {example.explanation && (
                        <p className="mt-3 leading-7 text-gray-500">
                          {example.explanation}
                        </p>
                      )}

                      <pre className="mt-5 overflow-x-auto rounded-xl bg-gray-950 p-5 text-sm text-gray-100">
                        <code>{example.code}</code>
                      </pre>

                      <Link
                        href={`/playground?section=${section.slug}&lesson=${lesson.slug}&example=${index}`}
                        className="mt-5 inline-block rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
                      >
                        Try this example →
                      </Link>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
