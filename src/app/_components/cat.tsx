type Props = {
  name: string;
  id?: string;
};

function Cat({ name, id }: Props) {
  //   const [form, setForm] = useState();
  return (
    <>
      <span className="" draggable="true" ondragstart="">
        {name}
      </span>
    </>
  );
}
export default Cat;
