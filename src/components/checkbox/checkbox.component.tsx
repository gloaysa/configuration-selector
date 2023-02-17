import { ChangeEvent, FunctionComponent, useState } from "react";
import { Switch } from "@mui/material";

interface ICheckboxComponent {
  defaultValue: boolean;
}

const CheckboxComponent: FunctionComponent<ICheckboxComponent> = ({
  defaultValue,
}) => {
  const [checked, setChecked] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setChecked(event.target.checked);

  return <Switch checked={checked} onChange={handleChange} />;
};

export default CheckboxComponent;
