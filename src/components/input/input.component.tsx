import { FunctionComponent } from "react";
import { Configuration } from "../../interfaces/configuration.interface";
import DropdownComponent from "../dropdown/dropdown.component";
import { TextField } from "@mui/material";
import "./input.component.css";
import CheckboxComponent from "../checkbox/checkbox.component";
import RadioGroupComponent from "../radio-group/radio-group.component";

interface IInputComponent {
  option: Configuration;
}

const Input: FunctionComponent<IInputComponent> = ({ option }) => {
  if (option.type === "text") {
    return <TextField value={String(option.default)} />;
  }
  if (option.type === "number") {
    return <TextField type={option.type} value={Number(option.default)} />;
  }
  if (option.type === "dropdown") {
    return <DropdownComponent option={option} />;
  }
  if (option.type === "checkbox") {
    return <CheckboxComponent defaultValue={Boolean(option.default)} />;
  }
  if (option.type === "radio") {
    return (
      <RadioGroupComponent
        options={option.options!}
        defaultValue={String(option.default)}
      />
    );
  }
  return <></>;
};

const InputComponent: FunctionComponent<IInputComponent> = ({ option }) => {
  return (
    <div className="input">
      <label className="input__label">{option.name}</label>
      <Input option={option} />
    </div>
  );
};

export default InputComponent;
