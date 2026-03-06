import type { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="p-4 mx-auto max-w-310">{children}</div>;
};

export default Container;
