import Link from "next/link";

export default function TopicCard({ section }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Lessons in this section</h3>

        <span className="text-sm text-gray-500">
          {section.lessons.length} lessons
        </span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {section.lessons.map((lesson, index) => (
          <Link
            key={lesson.slug}
            href={`/learn/javascript/${section.slug}/${lesson.slug}`}
            className="group rounded-xl border p-4 transition hover:border-gray-400 hover:bg-gray-50"
          >
            <p className="text-xs font-medium text-gray-500">
              LESSON {String(index + 1).padStart(2, "0")}
            </p>

            <h4 className="mt-2 font-semibold group-hover:underline">
              {lesson.title}
            </h4>

            <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
              {lesson.description}
            </p>

            <span className="mt-4 inline-block text-sm font-medium">
              Open lesson →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
