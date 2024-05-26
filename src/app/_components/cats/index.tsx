// import { useState } from "react";
import catModel from "@/models/cat";
// fluffy2.save();

// const smallCats = await Kittens.find({ size: 'small' }).exec();
const doc = [];
// const doc = await catModel.find();

//==============================================//

type Props = {
  children: React.ReactNode;
};

function Orders({ children }: Props) {
  //   const [form, setForm] = useState();
  return (
    <>
      <div className="border p-10 my-10">
        Your Cats
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {doc.map((item) => (
            <div className="m-1">{item.name}</div>
          ))}
        </div>
      </div>
      <div>{JSON.stringify(doc, null, 2)}</div>
    </>
  );
}
export default Orders;