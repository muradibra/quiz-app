import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const quizzes = await prisma.quiz.findMany();

  return (
    <div className="bg-gray-900 min-h-screen pt-10">
      <div className="flex flex-col gap-3 justify-center items-center">
        {quizzes.map((quiz) => (
          <div key={quiz.id}>
            <div className="bg-gray-800 p-4  rounded-lg flex justify-between gap-[100px]">
              <h1 className="text-2xl text-white">{quiz.title}</h1>
              <Link
                href={`/quiz/${quiz.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Start Quiz
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
