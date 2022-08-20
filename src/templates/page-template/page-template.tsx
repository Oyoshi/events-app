import { FC } from "react";
import { Box } from "@mui/material";
import Navbar from "components/navbar";
import { SCPageContainer } from "./page-template.style";
import { PageTemplateProps } from "./page-template.interface";

const PageTemplate: FC<PageTemplateProps> = ({ wide, children }) => {
  return (
    <Box>
      <Navbar />
      <SCPageContainer wide={wide}>{children}</SCPageContainer>
    </Box>
  );
};

export default PageTemplate;
