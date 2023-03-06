import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function AddNoteIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M5.46362 20.8848H16.9309C18.6793 20.8848 19.7068 19.8737 19.7068 17.8626V7.42051L18.1257 8.99119V17.7756C18.1257 18.7922 17.5747 19.3141 16.906 19.3141H5.48855C4.51327 19.3141 3.98108 18.7922 3.98108 17.7756V6.69755C3.98108 5.68091 4.51327 5.15906 5.48855 5.15906H14.3889L15.9595 3.58838H5.46362C3.43792 3.58838 2.40002 4.59519 2.40002 6.61055V17.8626C2.40002 19.878 3.43792 20.8848 5.46362 20.8848Z" />
      <path d="M9.02792 14.5575L10.928 13.7295L20.041 4.61869L18.6993 3.30595L9.5988 12.4086L8.72524 14.2445C8.64432 14.4145 8.8372 14.6363 9.02792 14.5575ZM20.7631 3.89865L21.4665 3.18285C21.7924 2.83837 21.7945 2.36354 21.4728 2.04188L21.243 1.81204C20.9359 1.50494 20.4547 1.54022 20.1455 1.8619L19.4297 2.56523L20.7631 3.89865Z" />
    </SvgIcon>
  );
}

export default AddNoteIcon;
