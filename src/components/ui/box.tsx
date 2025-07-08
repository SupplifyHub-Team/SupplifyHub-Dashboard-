import { cn } from "@/lib/utils";
import React from "react";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export default function Box({ className, children, ...props }: BoxProps) {
  return (
    <div className={cn("bg-white p-6 md:p-0 shadow-lg rounded-lg", className)} {...props}>
      {children}
    </div>
  );
}
