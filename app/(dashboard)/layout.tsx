import NewTodoForm from "@/components/NewTodoForm";
import { FC } from "react";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout: FC<DashBoardLayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </>
  );
};

export default DashBoardLayout;
