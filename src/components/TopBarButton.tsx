import { FC, ReactElement } from "react";
import IconButton from "@mui/material/IconButton";

interface TopBarButton {
  children: ReactElement;
  ml?: string;
}

const TopBarButton: FC<TopBarButton> = ({ children, ml }) => {
  return (
    <IconButton
      sx={{
        borderRadius: "16px",
        ml: ml ? ml : "0",
      }}
    >
      {children}
    </IconButton>
  );
};

export default TopBarButton;
