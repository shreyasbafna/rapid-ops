import { StyledSpinner } from "./Spinner.style";
import { ImSpinner2 } from "react-icons/im";
import { CSSProperties } from "react";
interface I_Spinner {
  fontSize: string;
  className?: string;
  style?: CSSProperties;
}
export const Spinner = ({ fontSize, className, style }: I_Spinner) => {
  return (
    <StyledSpinner className={className} style={style} fontSize={fontSize}>
      <ImSpinner2 fontSize={fontSize} />
    </StyledSpinner>
  );
};
