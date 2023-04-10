import { Column, Navbar } from "@/components";

import { Props } from "@/shared/interfaces/props";

export const LoggedLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Column px="80px">{children}</Column>
    </>
  );
};
