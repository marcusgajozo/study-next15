import Link from "next/link";

export const Menu = () => {
  return (
    <aside className="w-xs bg-gray-100">
      <div className="p-4 bg-gray-200 text-black">
        <h2 className="text-2xl font-bold">Study Next15</h2>
        <p>
          by <span>Marcus Gajozo</span>
        </p>
      </div>
      <nav className="p-4 ">
        <Link
          href="/refresh-token-authjs"
          className="text-blue-500 hover:underline"
        >
          Refresh Token with Authjs
        </Link>
      </nav>
    </aside>
  );
};
