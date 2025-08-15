import { ReactNode, Fragment } from "react";

interface InfoLayoutProps {
  children: ReactNode;
}

const InfoLayout = ({ children }: InfoLayoutProps) => {
  return <Fragment>{children}</Fragment>;
};

export default InfoLayout;
