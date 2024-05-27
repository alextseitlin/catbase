type Props = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className }: Props) {
  return <div className={`m-auto w-10/12 ${className}`}>{children}</div>;
}
export default Container;
