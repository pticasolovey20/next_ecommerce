import { ReactNode } from "react";

interface InfoLayoutProps {
  children: ReactNode;
}

const InfoLayout = ({ children }: InfoLayoutProps) => {
  return <main className="p-4">{children}</main>;
};

export default InfoLayout;
