type Props = {
  children: React.ReactNode;
  classname?: string;
};

function Terminal({ children, classname }: Props) {
  return <div className={`border p-10 my-10 ${classname}`}>{children}</div>;
}
export default Terminal;
