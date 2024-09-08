import ButtonMui, { ButtonProps as ButtonPropsMui } from "@mui/material/Button";
import LoadingButtonMui, {
  LoadingButtonProps as LoadingButtonPropsMui,
} from "@mui/lab/LoadingButton";
import "./Button.scss";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  text: string;
  variant?: "text" | "outlined" | "contained";
  type?: "text" | "loading";
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonType?: "button" | "submit" | "reset";
}

export const Button = ({
  size = "medium",
  text,
  type = "text",
  variant = "outlined",
  loading = false,
  buttonType = "button",
  onClick,
}: ButtonProps) => {
  return type === "loading" ? (
    <LoadingButtonMui
      className="button"
      loading={loading}
      size={size}
      variant={variant}
      onClick={onClick}
      type={buttonType}
    >
      {text}
    </LoadingButtonMui>
  ) : (
    <ButtonMui
      onClick={onClick}
      className="button"
      size={size}
      variant={variant}
      type={buttonType}
    >
      {text}
    </ButtonMui>
  );
};
