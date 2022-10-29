import { FC } from "react";
import { Box } from "@mui/material";
import Navbar from "components/navbar";
import { SCPageContainer } from "./page-template.style";
import { PageTemplateProps } from "./page-template.interface";

const PageTemplate: FC<PageTemplateProps> = ({ wide, onSearch, children }) => {
  return (
    <Box>
      <Navbar onSearch={onSearch} />{" "}
      <SCPageContainer wide={wide}>{children}</SCPageContainer>
    </Box>
  );
};

export default PageTemplate;
