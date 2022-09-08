import { LogoIconContainer, LogoIconPiece } from "./LogoIcon.style";

export const LogoIcon: React.FC = () => {
  return (
    <LogoIconContainer>
      <LogoIconPiece sx={{ width: "20px", height: "5px" }} />
      <LogoIconPiece sx={{ width: "12px", height: "5px" }} />
      <LogoIconPiece
        sx={{
          width: "7px",
          height: "7px",
          borderRadius: "50%",
        }}
      />
    </LogoIconContainer>
  );
};
