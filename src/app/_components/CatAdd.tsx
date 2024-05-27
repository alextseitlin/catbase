type Props = {
  name: string;
};

function Orders({ name }: Props) {
  //   const [form, setForm] = useState();
  return (
    <>
      <span className="mx-3">{name}</span>
    </>
  );
}
export default Orders;
