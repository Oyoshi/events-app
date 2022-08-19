import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { SCPageTemplateProps } from "./page-template.interface";

export const SCPageContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "fullWidth",
})<SCPageTemplateProps>(({ fullWidth }) => ({
  maxWidth: fullWidth ? "95vw" : "1024px",
  margin: "2em auto",
}));
