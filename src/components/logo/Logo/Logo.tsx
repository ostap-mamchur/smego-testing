import { LogoContainer, LogoText } from "./Logo.style";
import { LogoIcon } from "../LogoIcon/LogoIcon";


export const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <LogoText>smeGo</LogoText>
      <LogoIcon />
    </LogoContainer>
  );
};
