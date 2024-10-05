import { TextField } from "@mui/material";
type Props = {
  name: string;
  type: string;
  label: string;
};

const CustomisedInput = (props: Props) => {
  return (
    <TextField
      sx={{ input: { color: "white", width: '400px', borderRadius: 2, fontSize:20} } }
      InputLabelProps={{style: {color: 'white'}}}
      margin="normal"
      name={props.name}
      label={props.label}
      type={props.type}
    ></TextField>
  );
};

export default CustomisedInput;
