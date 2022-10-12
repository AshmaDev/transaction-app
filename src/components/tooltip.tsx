import React from "react";

export default function Tooltip({ content }: { content: string }) {
  return (
    <p className="has-tooltip float-right">
      <span className="tooltip bg-gray-900 p-3 -mt-1 lg:-mt-8 rounded">
        {content}
      </span>
      🤔
    </p>
  );
}
