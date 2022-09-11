import { Button, Typography } from "@mui/material";

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
      <Typography variant="h6" component="h3" sx={{ marginBottom: "3em" }}>
        {title}
      </Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 2em",
        }}
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
      </form>
    </>
  );
};
