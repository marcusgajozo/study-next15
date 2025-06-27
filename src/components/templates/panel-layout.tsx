import { Menu } from "../organisms/menu";

export const PanelLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="flex h-screen">
      <Menu />
      <section className="p-4 overflow-auto w-full">{children}</section>
    </main>
  );
};
