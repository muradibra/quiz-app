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

type Props = {
  quizzes: (Quiz & Question[])[];
};

export const QuizzesTable = ({ quizzes }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center text-white w-[100px]">
            Quiz Title
          </TableHead>
          <TableHead className="text-center text-white">
            Question Count
          </TableHead>
          <TableHead className=" text-white ">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {quizzes.map((quiz) => (
          <TableRow key={quiz.id}>
            <TableCell className="text-white text-center">
              {quiz.title}
            </TableCell>
            <TableCell className="text-white text-center">
              {quiz.questions.length}
            </TableCell>
            <TableCell className="text-white text-center flex items-center gap-3">
              <DeletePopover id={quiz.id} />
              <Button variant={"ghost"} size={"icon"}>
                <Pencil1Icon />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
