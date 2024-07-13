import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-4 py-16 px-12 border-r h-screen">
      <Link className="" href={"/"}>
        Overview
      </Link>
      <Link href={"/dashboard/inventory"}>Inventory</Link>
    </aside>
  );
};
