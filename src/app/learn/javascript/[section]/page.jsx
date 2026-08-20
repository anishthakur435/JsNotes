import Link from "next/link";
import { notFound } from "next/navigation";
import { curriculum } from "@/lib/curriculum";

export default async function SectionPage({ params }) {
  const { section: sectionSlug } = await params;

  const section = curriculum.find((section) => section.slug === sectionSlug);

  if (!section) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* Back */}
      <Link
        href="/learn"
        className="text-sm font-medium text-gray-500 hover:text-black"
      >
        ← Back to curriculum
      </Link>

      {/* Section Header */}
      <section className="mt-8 max-w-3xl">
        <p className="text-sm font-medium text-gray-500">JavaScript Topic</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          {section.title}
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-500">
          {section.description}
        </p>
      </section>

      {/* Small Topics */}
      <section className="mt-14">
        <div>
          <h2 className="text-2xl font-bold">Topics in {section.title}</h2>

          <p className="mt-2 text-gray-500">Learn each concept step by step.</p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {section.lessons.map((lesson, index) => (
            <Link
              key={lesson.slug}
              href={`/learn/javascript/${section.slug}/${lesson.slug}`}
              className="group rounded-xl border p-6 transition hover:bg-gray-50 hover:shadow-sm"
            >
              <p className="text-sm font-medium text-gray-400">
                Topic {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-3 text-xl font-semibold group-hover:underline">
                {lesson.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {lesson.description}
              </p>

              {lesson.topics && (
                <ul className="mt-4 space-y-1 text-sm text-gray-500">
                  {lesson.topics.slice(0, 3).map((topic) => (
                    <li key={topic}>• {topic}</li>
                  ))}
                </ul>
              )}

              <span className="mt-5 inline-block text-sm font-medium">
                Learn topic →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
