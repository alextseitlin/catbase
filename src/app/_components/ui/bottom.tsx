import Link from "./Link";

type Props = {
  children?: React.ReactNode;
  onClick?: Function;
  href?: string;
  type?: string;
};
const baseClassName = "bg-emerald-400 py-2 px-3 inline-block cursor-pointer";
function Bottom({ children, href, onClick, type }: Props) {
  if (href) {
    return (
      <Link href={href} className={`${baseClassName}`} onClick={onClick}>
        children
      </Link>
    );
  }

  if (type === "submit") {
    return (
      <input className={`${baseClassName}`} value={children} type="submit" />
    );
  }

  return (
    <div className={`${baseClassName}`} onClick={onClick} type={type}>
      {children}
    </div>
  );
}
export default Bottom;
