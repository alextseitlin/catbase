import React, { ReactNode, MouseEventHandler } from "react";
import Link from "@/app/_components/ui/link";

type Props = {
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  href?: string;
  type?: string;
};
const baseClassName = "bg-emerald-400 py-2 px-3 inline-block cursor-pointer";
function Button({ children, href, onClick, type }: Props) {
  if (href) {
    return (
      <Link href={href} className={`${baseClassName}`} onClick={onClick}>
        children
      </Link>
    );
  }

  if (type === "submit") {
    const value =
      typeof children === "string" || typeof children === "number"
        ? children
        : String(children);

    return <input className={`${baseClassName}`} value={value} type="submit" />;
  }

  return (
    <div className={`${baseClassName}`} onClick={onClick}>
      {children}
    </div>
  );
}
export default Button;
