import { FC } from "react";
import { INoteItem } from "../types/types";

interface NoteItemProps {
  noteItem: INoteItem;
}

const NoteItem: FC<NoteItemProps> = ({ noteItem }) => {
  return (
    <>
      <h6>{noteItem.noteBody.title}</h6>
      {noteItem.createdAt}
      <p>{noteItem.noteBody.text}</p>
    </>
  );
};

export default NoteItem;
