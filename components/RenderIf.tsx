import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  condition: boolean;
}

const RenderIf = ({ children, condition }: Props) => {
  return condition ? <>{children}</> : null;
};

export default RenderIf;
