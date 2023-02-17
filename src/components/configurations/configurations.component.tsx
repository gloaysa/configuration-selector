import { FunctionComponent } from "react";
import { useAppSelector } from "../../store/store";
import InputComponent from "../input/input.component";
import { FormGroup } from "@mui/material";

const ConfigurationsComponent: FunctionComponent = () => {
  const configFiles = useAppSelector((state) => state.configurations.files);
  return (
    <>
      <h1>Configurations</h1>
      {configFiles.map(({ name, options }, index) => (
        <section key={index}>
          <h5>{name}</h5>
          {options?.map((option, index) => (
            <FormGroup key={index}>
              <p>{option.description}</p>
              <InputComponent option={option} />
            </FormGroup>
          ))}
        </section>
      ))}
    </>
  );
};

export default ConfigurationsComponent;
