import { FC, useState } from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { INoteItem } from "../types/types";

interface NoteItemsListProps {
  drawerWidth: number;
  notes: INoteItem[];
}

const NoteItemsList: FC<NoteItemsListProps> = ({ drawerWidth, notes }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          ["& .MuiDrawer-paper"]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Typography
            variant="subtitle1"
            noWrap
            component="div"
            sx={{ textAlign: "center" }}
          >
            Сегодня
          </Typography>
          <Divider />
          <List sx={{ width: "100%", maxWidth: 240 }}>
            {notes.map((note: INoteItem) => (
              <ListItem key={note.id} disablePadding>
                <ListItemButton onClick={(e) => console.log(e)}>
                  <ListItemText
                    primary={note.noteBody.title}
                    secondary={
                      <Box
                        component="span"
                        sx={{
                          display: "flex",
                          textAlign: "end",
                        }}
                      >
                        <Typography
                          component="span"
                          variant="subtitle2"
                          mr="10px"
                          fontWeight="500"
                          lineHeight={1.7}
                        >
                          {note.updatedAt}
                        </Typography>
                        <Typography
                          component="span"
                          variant="body1"
                          noWrap
                          sx={{
                            maxWidth: "calc(100% - 70px)",
                            display: "inline-block",
                          }}
                        >
                          {note.noteBody.text}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NoteItemsList;
