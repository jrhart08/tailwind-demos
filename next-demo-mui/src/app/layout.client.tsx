'use client';

import type { ReactNode } from "react";
import { ThemeProvider, Container } from "@mui/material";
import theme, { inter } from './theme-client';

interface Props {
  children: ReactNode;
}

export default function ClientLayout({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Container className={inter.className}>
        {children}
      </Container>
    </ThemeProvider>
  );
}