import { ReactNode } from "react";

export interface SCPageTemplateProps {
  wide?: boolean;
}

export interface PageTemplateProps extends SCPageTemplateProps {
  children: ReactNode;
}
