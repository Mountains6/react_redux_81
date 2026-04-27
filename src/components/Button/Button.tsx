import type { ButtonProps } from "./types.tsx";
import { MyButton } from "./styles.ts";

function Button({ name, type = "button", onButtonClick, isDanger }: ButtonProps) {
  return (
    <MyButton type={type} onClick={onButtonClick} $isDanger={isDanger}>
      {name}
    </MyButton>
  );
}

export default Button;
