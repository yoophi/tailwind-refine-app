import { LayoutProps } from "@pankod/refine-core";
import React from "react";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Layout</h1>
      <div>{children}</div>
    </div>
  );
};
