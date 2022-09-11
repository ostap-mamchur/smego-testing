import { Button } from "@mui/material";
import { FormTitle, StyledForm } from "./FormTemplate.style";

interface FormTemplateProps {
  title?: string;
  children?: JSX.Element | JSX.Element[];
  moveToNextPage?: () => void;
  moveToPreviousPage?: () => void;
}

export const FormTemplate: React.FC<FormTemplateProps> = ({
  title,
  children,
  moveToNextPage,
  moveToPreviousPage,
}) => {
  return (
    <>
      <FormTitle variant="h6">
        {title}
      </FormTitle>
      <StyledForm
      >
        {children}
        <div
          style={{
            margin: "2em 0",
            display: "flex",
          }}
        >
          {moveToPreviousPage && (
            <Button
              onClick={moveToPreviousPage}
              size="large"
              variant="outlined"
            >
              Back
            </Button>
          )}
          {moveToNextPage && (
            <Button
              onClick={moveToNextPage}
              sx={{ marginLeft: "auto" }}
              size="large"
              variant="contained"
            >
              Next
            </Button>
          )}
        </div>
      </StyledForm>
    </>
  );
};
