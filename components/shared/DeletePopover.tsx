"use client";

import React, { useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { deleteQuiz } from "@/actions/quiz";
import { toast } from "sonner";

export const DeletePopover = ({ id }: { id: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    const result = await deleteQuiz(id);
    if (!result.ok) {
      toast.error(result.error);
    } else {
      toast.success("Quiz deleted successfully");
    }
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant={"destructive"} size={"icon"}>
          <TrashIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col">
          <Button variant={"outline"} onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant={"destructive"} onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
