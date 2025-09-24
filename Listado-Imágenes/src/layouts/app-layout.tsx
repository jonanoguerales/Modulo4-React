import { PropsWithChildren } from "react";
import { HeaderLayout,FooterLayout,SiderBarLayout } from "../common/components";

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <HeaderLayout />
      <section style={{ flex: 1, display: "flex" }}>
        <main style={{ flex: 1, padding: "2rem", display: "flex", gap: "1rem",justifyContent: "space-between" }}>{children}</main>
        <SiderBarLayout />
      </section>
      <FooterLayout />
    </>
  );
};
