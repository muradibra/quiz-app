"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getQuestions(id?: string) {
  const quizQuestions = await prisma.question.findMany({
    where: {
      quizId: id,
    },
    include: {
      answers: true,
      quiz: true,
    },
  });

  return quizQuestions;
}

export async function createQuestion({
  quizId,
  text,
}: {
  quizId: string;
  text: string;
}) {
  const quiz = await prisma.question.create({
    data: {
      quizId,
      text,
    },
  });

  revalidatePath("/dashboard");

  return {
    ok: true,
    quiz,
  };
}

export async function getQuiz() {
  const quizzes = await prisma.quiz.findMany({
    include: {
      questions: true,
    },
  });

  return quizzes;
}

export async function getAnswers() {
  const quizAnswers = await prisma.answer.findMany({
    include: {
      question: true,
    },
  });

  return quizAnswers;
}
