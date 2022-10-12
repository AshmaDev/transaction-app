import React from "react";
import { classNames } from "../utils/class-names";

interface Props {
  title?: string;
  className?: string;
  children: JSX.Element | string;
}

export default function Card({ title, className, children }: Props) {
  return (
    <div className={classNames(
      "bg-gray-100 text-gray-900 p-8 rounded-xl m-2",
      className ?? null
    )}
    >
      {title && <h2 className="text-xl font-semibold">{title}</h2>}
      {children}
    </div>
  );
}
