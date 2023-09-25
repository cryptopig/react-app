import { ReactNode } from "react";

// we always use PascalCase in react and in general
interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
