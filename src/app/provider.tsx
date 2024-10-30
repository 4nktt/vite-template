import { ReactNode } from "react";

import { ThemeProvider } from "@/components/theme-provider";

export default function Provider({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
