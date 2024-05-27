import React, { ReactNode, MouseEventHandler } from "react";
import NextLink from "next/link";

interface LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const Link: React.FC<LinkProps> = ({ children, href, className, onClick }) => {
  return (
    <NextLink href={href} passHref>
      <a className={className} onClick={onClick}>
        {children}
      </a>
    </NextLink>
  );
};

interface DivOrLinkProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?:
    | MouseEventHandler<HTMLDivElement>
    | MouseEventHandler<HTMLAnchorElement>;
}

const DivOrLink: React.FC<DivOrLinkProps> = ({
  children,
  href,
  className,
  onClick,
}) => {
  const baseClassName = "some-class";

  if (href) {
    return (
      <Link
        href={href}
        className={baseClassName}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  return (
    <div
      className={baseClassName}
      onClick={onClick as MouseEventHandler<HTMLDivElement>}
    >
      {children}
    </div>
  );
};

export default DivOrLink;
