import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-4 p-16 border-r h-screen">
      <Link className="" href={"/"}>
        Overview
      </Link>
      <Link href={"/inventory"}>Inventory</Link>
    </aside>
  );
};
