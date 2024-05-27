import Link from "./link";

type Props = {
  children?: React.ReactNode;
  href?: string;
};
function Bottom({ children, href }: Props) {
  if (href) {
    return <Link href={href}>children</Link>;
  }

  return (
    <div className="bg-emerald-400 py-2 px-3 inline-block">{children}</div>
  );
}
export default Bottom;
