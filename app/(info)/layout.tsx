import { ReactNode } from "react";

interface InfoLayoutProps {
  children: ReactNode;
}

const InfoLayout = ({ children }: InfoLayoutProps) => {
  return <main className="flex-1 flex items-center justify-center p-4">{children}</main>;
};

export default InfoLayout;
