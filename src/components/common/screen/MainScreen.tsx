import type { ReactNode } from "react";

interface IMainScreenProps {
  className?: string;
  children: ReactNode;
}

export const MainScreen = ({ className = "", children }: IMainScreenProps) => {
  return (
    <div
      className={
        "h-screen w-screen bg-linear-to-br from-background-start to-background-finish flex " +
        className
      }
    >
      {children}
    </div>
  );
};
