"use client";

import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Answer, Question, Quiz } from "@prisma/client";
import { Button } from "../ui/button";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { DeletePopover } from "./DeletePopover";

// type Question = {
//   id: string;
//   title: string;
//   quizId: string;
// };

type Props = {
  answers: Answer[];
};

export const AnswersTable = ({ answers }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center text-white">Question</TableHead>
          <TableHead className="text-center text-white">Answer Title</TableHead>
          <TableHead className="text-center text-white">Correct</TableHead>
          <TableHead className="text-center text-white">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {answers.map((answer) => {
          return (
            <TableRow key={answer.id}>
              <TableCell className="text-white text-center">
                {answer?.question?.text}
              </TableCell>
              <TableCell className="text-white text-center">
                {answer.text}
              </TableCell>
              <TableCell className="text-white text-center">
                {JSON.stringify(answer.isCorrect)}
              </TableCell>
              <TableCell className="text-white  flex items-center justify-center gap-3">
                <DeletePopover id={answer.id} />
                <Button variant={"ghost"} size={"icon"}>
                  <Pencil1Icon />
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
