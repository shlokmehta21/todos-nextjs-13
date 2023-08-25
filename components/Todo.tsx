"use client";
import { completeTodo } from "@/utils/actions";
import { FC, useTransition } from "react";

interface TodoProps {
  todo: any;
}

const Todo: FC<TodoProps> = ({ todo }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        todo.completed === true ? " line-through text-gray-900" : ""
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
