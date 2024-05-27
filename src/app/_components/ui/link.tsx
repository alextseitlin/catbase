import NextLink from "next/link";

type Props = {
  children?: React.ReactNode;
  onClick?: Function;
  className?: string;
  href: string;
};
function Link({ children, href, className, onClick }: Props) {
  return (
    <NextLink href={href} className={`${className}`} onClick={onClick}>
      {children}
    </NextLink>
  );
}
export default Link;
