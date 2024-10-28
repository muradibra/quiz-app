"use client";

import React, { useState } from "react";
import { Question, Answer } from "@prisma/client";

type Props = {
  questions: (Question & { answers: Answer[] })[]; // Type includes associated answers with each question
};

export const Questions = ({ questions }: Props) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswerSelect = (answer: Answer) => {
    setSelectedAnswer(answer.id);
    setIsCorrect(answer.isCorrect);
  };

  const handleNextQuestion = () => {
    if (activeQuestionIndex < questions.length - 1) {
      setActiveQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      alert("Quiz completed!");
    }
  };

  const currentQuestion = questions[activeQuestionIndex];

  return (
    <div className="w-[40%] mx-auto min-h-[700px] flex flex-col justify-center">
      <div className="bg-gray-800 p-8">
        <h2 className="text-white">{currentQuestion.text}</h2>
        <div className="mt-4">
          {currentQuestion.answers.map((answer) => (
            <div
              key={answer.id}
              className={`my-2 p-2 rounded-lg ${
                selectedAnswer === answer.id
                  ? answer.isCorrect
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "bg-gray-700"
              }`}
            >
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="answer"
                  value={answer.id}
                  checked={selectedAnswer === answer.id}
                  onChange={() => handleAnswerSelect(answer)}
                  disabled={selectedAnswer !== null}
                />
                <span className="text-white">{answer.text}</span>
              </label>
            </div>
          ))}
          {isCorrect !== null && (
            <p className="text-white">
              {isCorrect ? "Correct!" : "Incorrect!"}
            </p>
          )}
        </div>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={handleNextQuestion}
          disabled={!selectedAnswer}
        >
          {activeQuestionIndex < questions.length - 1 ? "Next" : "Finish Quiz"}
        </button>
      </div>
    </div>
  );
};
