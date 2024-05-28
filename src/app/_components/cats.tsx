import React, { DragEventHandler } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
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
  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    // const sInd = +source.droppableId;
    // const dInd = +destination.droppableId;
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const [list, setList] = useState([
    { label: "First" },
    { label: "Second" },
    { label: "Third" },
    { label: "Fourth" },
    { label: "Fifth" },
    { label: "Sixth" },
  ]);

  return (
    <>
      {catData.map((location, index) => (
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
      ))}
    </>
  );
}
export default Cats;
