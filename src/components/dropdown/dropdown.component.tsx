import { FunctionComponent, useState } from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Configuration } from "../../interfaces/configuration.interface";

interface IDropdownComponent {
  option: Configuration;
}

const DropdownComponent: FunctionComponent<IDropdownComponent> = ({
  option,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    option.default as string
  );
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value);
  };
  return (
    <Select value={selectedOption} onChange={handleChange}>
      {option.options?.map((value, index) => (
        <MenuItem key={index} value={value}>
          {value}
        </MenuItem>
      ))}
    </Select>
  );
};

export default DropdownComponent;
