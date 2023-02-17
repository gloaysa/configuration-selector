export interface ConfigurationFile {
  name: string;
  options: Configuration[];
}

export interface Configuration {
  name: string;
  type: "checkbox" | "number" | "radio" | "text" | "url" | "dropdown";
  default: boolean | string | number;
  description: string;
  options: string[] | undefined;
}
