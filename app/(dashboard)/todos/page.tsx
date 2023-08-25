import { FC } from "react";
import db from "@/utils/db";
import TodoList from "@/components/TodoList";
interface TodosPageProps {}

const getTodos = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const todos = await db.todo.findMany({});
  return { todos };
};

const TodosPage: FC<TodosPageProps> = async ({}) => {
  const { todos } = await getTodos();

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;
