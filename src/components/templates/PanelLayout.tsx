import { Menu } from "../organisms/Menu";

export const PanelLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="flex h-screen">
      <Menu />
      <section className="p-4">{children}</section>
    </main>
  );
};
