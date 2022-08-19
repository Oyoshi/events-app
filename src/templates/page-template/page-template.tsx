import { FC } from "react";
import { Box } from "@mui/material";
import Navbar from "components/navbar";
import { SCPageContainer } from "./page-template.style";
import { PageTemplateProps } from "./page-template.interface";

const PageTemplate: FC<PageTemplateProps> = ({ fullWidth, children }) => {
  return (
    <Box>
      <Navbar />
      <SCPageContainer fullWidth={fullWidth}>{children}</SCPageContainer>
    </Box>
  );
};

export default PageTemplate;
