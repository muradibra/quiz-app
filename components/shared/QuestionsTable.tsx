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
import { Question, Quiz } from "@prisma/client";
import { Button } from "../ui/button";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { DeletePopover } from "./DeletePopover";

// type Question = {
//   id: string;
//   title: string;
//   quizId: string;
// };

type Props = {
  questions: (Question & Quiz)[];
};

export const QuestionsTable = ({ questions }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center text-white">Quiz</TableHead>
          <TableHead className="text-center text-white">
            Question Title
          </TableHead>
          <TableHead className="text-center text-white">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {questions.map((question) => {
          return (
            <TableRow key={question.id}>
              <TableCell className="text-white text-center">
                {question?.quiz?.title}
              </TableCell>
              <TableCell className="text-white text-center">
                {question.text}
              </TableCell>
              <TableCell className="text-white  flex items-center justify-center gap-3">
                <DeletePopover id={question.id} />
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
