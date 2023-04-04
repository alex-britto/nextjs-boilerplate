import { ReactNode } from "react";

import { Navbar } from "@/components";

export const LoggedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>
        <p>Isso é o footer. Você está logado</p>
      </footer>
    </>
  );
};
