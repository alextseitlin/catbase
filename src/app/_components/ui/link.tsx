import NextLink from "next/link";

type Props = {
  children?: React.ReactNode;
  href: string;
};
function Link({ children, href }: Props) {
  return <NextLink href={href}>{children}</NextLink>;
}
export default Link;
