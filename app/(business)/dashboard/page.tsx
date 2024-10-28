import { getAnswers, getQuestions, getQuiz } from "@/actions/questions";
import { AnswerDialog } from "@/components/shared/AnswerDialog";
import { AnswersTable } from "@/components/shared/AnswersTable";
import { QuestionDialog } from "@/components/shared/QuestionDialog";
import { QuestionsTable } from "@/components/shared/QuestionsTable";
import { QuizDialog } from "@/components/shared/QuizDialog";
import { QuizzesTable } from "@/components/shared/QuizzesTable";
import { Button } from "@/components/ui/button";
import { EModalType } from "@/types";
import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";

const DashboardPage = async () => {
  const quizzes = await getQuiz();
  const questions = await getQuestions();
  const answers = await getAnswers();
  console.log("------quizzes------", quizzes);
  console.log("------questions------", questions);
  console.log("------answers------", answers);

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 flex justify-between items-center border-b border-gray-500">
          <h2 className="text-2xl font-semibold text-white">Quizzes</h2>
          <QuizDialog type={EModalType.CREATE} />
          {/* <Button variant={"secondary"}>
            <PlusIcon className="w-5 h-5 mr-1" />
            Add Quiz
          </Button> */}
        </div>
        <QuizzesTable quizzes={quizzes} />
      </div>

      <div className="py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 flex justify-between items-center border-b border-gray-500">
          <h2 className="text-2xl font-semibold text-white">Questions</h2>
          <QuestionDialog type={EModalType.CREATE} quizzes={quizzes} />
        </div>

        <QuestionsTable
          questions={questions}
          // quizzes={quizzes}
        />
      </div>

      <div className="py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 flex justify-between items-center border-b border-gray-500">
          <h2 className="text-2xl font-semibold text-white">Answers</h2>
          <AnswerDialog type={EModalType.CREATE} quizzes={quizzes} />
          {/* <Button variant={"secondary"}>
            <PlusIcon className="w-5 h-5 mr-1" />
            Add Question
          </Button> */}
        </div>

        <AnswersTable
          answers={answers}
          // questions={questions}
          // quizzes={quizzes}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
