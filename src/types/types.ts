import { ChangeEvent } from "react";

export interface INoteBody {
  title: string;
  text: string | null;
  isEditing: boolean;
  onChange: (e: ChangeEvent) => void;
}

export interface INoteItem {
  id: number;
  createdAt: string;
  updatedAt: string;
  noteBody: INoteBody;
}
