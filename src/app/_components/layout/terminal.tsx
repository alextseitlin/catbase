import React, { DragEventHandler } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  label?: string;
  note?: string;
  onDrop?: DragEventHandler<HTMLDivElement>;
  onDragOver?: DragEventHandler<HTMLDivElement>;
};

function Terminal({
  children,
  className,
  id,
  label,
  note,
  onDrop,
  onDragOver,
}: Props) {
  return (
    <div
      className={`border relative ${className}`}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      {label && (
        <div
          id={id}
          className="pointer-events-none text-neutral-400 flex justify-between w-full pt-2 px-7 flex-col md:flex-row"
        >
          <span> - {label} -</span>
          <span>{note}</span>
        </div>
      )}
      <div
        className={`pointer-events-none ${label ? "pt-8 px-10 pb-10" : "p-10"}`}
      >
        {children}
      </div>
    </div>
  );
}
export default Terminal;
