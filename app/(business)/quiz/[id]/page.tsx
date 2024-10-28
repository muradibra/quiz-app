import { getQuestions } from "@/actions/questions";
import React from "react";
import { Questions } from "./_components/Questions";

const QuizPage = async ({ params: { id } }: { params: { id: string } }) => {
  const quizQuestions = await getQuestions(id);
  console.log(quizQuestions);

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <h1 className="text-white text-3xl text-center font-semibold">
        Start Quiz
      </h1>

      <Questions questions={quizQuestions} />
    </div>
  );
};

export default QuizPage;
