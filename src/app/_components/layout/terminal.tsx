type Props = {
  children: React.ReactNode;
  classname?: string;
  label?: string;
};

function Terminal({ children, classname, label }: Props) {
  return (
    <div
      className={`border ${
        label ? "px-10 pb-10 pt-14" : "p-10"
      } relative ${classname}`}
    >
      {label && (
        <span className="absolute top-2 left-4 text-neutral-400">
          - {label} -
        </span>
      )}

      {children}
    </div>
  );
}
export default Terminal;
