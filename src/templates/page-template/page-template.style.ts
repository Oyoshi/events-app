import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { SCPageTemplateProps } from "./page-template.interface";

export const SCPageContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "fullWidth",
})<SCPageTemplateProps>(({ fullWidth }) => ({
  maxWidth: fullWidth ? "1024px" : "512px",
  margin: "2em auto",
}));
