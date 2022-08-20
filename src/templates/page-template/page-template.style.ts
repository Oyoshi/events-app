import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { SCPageTemplateProps } from "./page-template.interface";

export const SCPageContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "wide",
})<SCPageTemplateProps>(({ wide }) => ({
  maxWidth: wide ? "1024px" : "512px",
  margin: "2em auto",
}));
