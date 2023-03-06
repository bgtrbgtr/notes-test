import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FC, useState, ChangeEvent } from "react";
import { INoteItem } from "../types/types";
import { Typography } from "@mui/material";

interface NoteEditFieldProps {
  note: INoteItem | null;
}

const NoteEditField: FC<NoteEditFieldProps> = ({ note }) => {
  const [value, setValue] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          position: "relative",
          left: "240px",
          top: "64px",
          right: 0,
          bottom: 0,
          maxWidth: "100%",
        }}
      >
        <Typography variant="subtitle1" noWrap component="span">
          {note?.updatedAt}
        </Typography>
        <Typography></Typography>
      </Box>
    </>
  );
};

export default NoteEditField;
