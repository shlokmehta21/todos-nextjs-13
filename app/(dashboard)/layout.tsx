import { FC } from "react";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout: FC<DashBoardLayoutProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default DashBoardLayout;
