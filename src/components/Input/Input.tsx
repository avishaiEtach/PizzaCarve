import "./Input.scss";

interface InputProps {
  multiple?: boolean;
  value: string;
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  onChange: (
    ev:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  name: string;
  rows?: number;
  label: string;
  required?: boolean;
}

export const Input = (props: InputProps) => {
  return (
    <div className="wrapper">
      <div className="input-data">
        {props.multiple ? (
          <textarea placeholder="" {...props}></textarea>
        ) : (
          <input placeholder="" {...props} />
        )}
        <div className="underline"></div>
        <label>
          {props.label}
          {props.required ? "*" : ""}
        </label>
      </div>
    </div>
  );
};
