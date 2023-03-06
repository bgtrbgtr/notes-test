import NoteItemsList from "./components/NoteItemsList";
import Box from "@mui/material/Box";
import TopBar from "./components/TopBar";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import NoteEditField from "./components/NoteEditField";
import { useEffect, useState } from "react";
import { INoteItem } from "./types/types";
import newNotes from "./constants/notes";

function App() {
  const [notes, setNotes] = useState<INoteItem[]>([]);

  useEffect(() => {
    setNotes(newNotes);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }} className="App">
        <TopBar />
        <NoteItemsList notes={notes} drawerWidth={240} />
      </Box>
      <NoteEditField note={null} />
    </ThemeProvider>
  );
}

export default App;
