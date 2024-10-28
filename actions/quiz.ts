"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type QuizProps = {
  values: {
    title: string;
    description: string;
  };
};

export async function createQuiz({
  values: { title, description },
}: QuizProps) {
  try {
    const result = await prisma.quiz.create({
      data: {
        title,
        description,
      },
    });

    revalidatePath("/dashboard");

    return {
      ok: true,
      status: 200,
      result,
    };
  } catch (error) {
    console.error(error);
    return { ok: false, status: 500, error: "Error creating quiz" };
  }
}

export async function deleteQuiz(id: string) {
  try {
    await prisma.quiz.delete({
      where: {
        id,
      },
    });

    revalidatePath("/dashboard");

    return {
      ok: true,
      status: 200,
    };
  } catch (error) {
    console.error(error);
    return { ok: false, status: 500, error: "Error deleting quiz" };
  }
}
