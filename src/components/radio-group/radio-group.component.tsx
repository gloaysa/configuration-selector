import { ChangeEvent, FunctionComponent, useState } from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

interface IRadioGroupComponent {
  options: string[];
  defaultValue: string;
}
const RadioGroupComponent: FunctionComponent<IRadioGroupComponent> = ({
  options,
  defaultValue,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      value={value}
      onChange={handleChange}
    >
      {options.map((option) => (
        <FormControlLabel
          key={option}
          value={option}
          control={<Radio />}
          label={option}
        />
      ))}
    </RadioGroup>
  );
};

export default RadioGroupComponent;
