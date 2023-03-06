import { cloneElement, ReactElement, useState, MouseEvent } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "./SearchIcon";
import InputBase from "@mui/material/InputBase";
import AddNoteIcon from "./AddNoteIcon";
import TextFormatIcon from "./TextFormatIcon";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ListIcon from "./ListIcon";
import SquareIcon from "./SquareIcon";
import DeleteIcon from "./DeleteIcon";
import TopBarButton from "./TopBarButton";

const drawerWidth = 240;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: "auto",
  width: "auto",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "20ch",
    border: `solid 1px ${theme.palette.grey[300]}`,
    borderRadius: "8px",
  },
}));

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    border: "none",
    borderRadius: "16px",
    padding: "8px",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-active": {
      backgroundColor: theme.palette.grey[200],
    },
    "&:not(:first-of-type)": {
      borderRadius: "16px",
    },
    "&:first-of-type": {
      borderRadius: "16px",
    },
  },
  "&.MuiToggleButtonGroup-root": {
    borderRadius: "16px",
    "&:hover": {
      backgroundColor: theme.palette.grey[100],
    },
  },
}));

interface ElevationScrollProps {
  children: ReactElement;
}

function ElevationScroll(props: ElevationScrollProps) {
  const children = props.children;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function TopBar() {
  const [display, setDisplay] = useState("list");

  const handleDisplay = (
    event: MouseEvent<HTMLElement>,
    newDisplay: string | null
  ) => {
    if (newDisplay !== null) {
      setDisplay(newDisplay);
    }
  };

  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Toolbar
              sx={{
                width: drawerWidth - 1,
                boxSizing: "border-box",
              }}
            >
              <StyledToggleButtonGroup
                value={display}
                exclusive
                onChange={handleDisplay}
                aria-label="notes displaying"
              >
                <ToggleButton value="list" aria-label="display list">
                  <ListIcon />
                </ToggleButton>

                <ToggleButton value="grid" aria-label="display grid">
                  <SquareIcon />
                </ToggleButton>
              </StyledToggleButtonGroup>
              <TopBarButton ml="auto">
                <DeleteIcon />
              </TopBarButton>
            </Toolbar>
            <Divider orientation="vertical" flexItem />
            <Toolbar
              sx={{
                width: `calc(100% - ${drawerWidth}px)`,
              }}
            >
              <TopBarButton>
                <AddNoteIcon />
              </TopBarButton>
              <TopBarButton>
                <TextFormatIcon />
              </TopBarButton>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Поиск"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Toolbar>
          </Box>
        </AppBar>
      </ElevationScroll>
    </>
  );
}

export default TopBar;
