type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return <div className="m-auto w-10/12">{children}</div>;
}
export default Container;
