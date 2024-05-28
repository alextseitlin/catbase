import React, { DragEventHandler } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Terminal from "@/layout/terminal";
import Cat from "@/components/cat";

type Props = {
  children?: React.ReactNode;
  catData?: Array<[]>;
  catsList?: Object;
  onDrop?: DragEventHandler<HTMLDivElement>;
  onDragOver?: DragEventHandler<HTMLDivElement>;
  onDragStart?: DragEventHandler<HTMLDivElement>;
};

function Cats({
  children,
  catData = [],
  onDrop,
  onDragOver,
  onDragStart,
  catsList,
}: Props) {
  //   const [form, setForm] = useState();
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable key={ind} droppableId={`${ind}`}></Droppable>
      </DragDropContext>
      {/* {catData.map((location, index) => (
        <Terminal
          id={`terminal-${location.name}-${index}`}
          key={index}
          label={location.name}
          note={location.note}
          onDrop={(e) => onDrop(e, location.name)}
          onDragOver={(e) => onDragOver(e)}
        >
          <span className="flex flex-wrap gap-3">
            [
            {catsList
              .filter((cat) => cat.location === location.name)
              .map((cat, index) => (
                <Cat
                  name={cat.name}
                  key={index}
                  id={`${cat.name}-${index}`}
                  onDragStart={onDragStart}
                />
              ))}
            ]
          </span>
        </Terminal>
      ))} */}
    </>
  );
}
export default Cats;
