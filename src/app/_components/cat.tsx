import React, { DragEventHandler } from "react";

type Props = {
  name: string;
  id?: string;
  onDragStart?: DragEventHandler<HTMLSpanElement>;
};

function Cat({ name, id, onDragStart }: Props) {
  //   const [form, setForm] = useState();
  return (
    <>
      <span className="" draggable="true" onDragStart={onDragStart}>
        {/* <span className="text-slate-500 mr-1">||</span>  */}
        {name}
      </span>
    </>
  );
}
export default Cat;
