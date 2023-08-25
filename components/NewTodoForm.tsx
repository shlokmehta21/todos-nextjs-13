"use server";
import { newTodo } from "@/utils/actions";
import { FC, useState } from "react";

interface NewTodoFormProps {}

const NewTodoForm: FC<NewTodoFormProps> = ({}) => {
  return (
    <form action={newTodo}>
      <input
        type="text"
        name="content"
        className=" border border-cyan-500 w-full p-2 rounded-md"
        placeholder="New Todo"
      />
      <button type="submit">new todo</button>
    </form>
  );
};

export default NewTodoForm;
