import { ReactNode } from "react";

export interface SCPageTemplateProps {
  fullWidth?: boolean;
}

export interface PageTemplateProps extends SCPageTemplateProps {
  children: ReactNode;
}
