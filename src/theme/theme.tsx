import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#ff",
		},
		text: {
			primary: "#00",
			disabled: "#C0C0C0",
		},
	},
});

export default theme;
