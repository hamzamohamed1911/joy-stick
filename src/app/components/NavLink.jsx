"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  return (
    <Link
      href={link.url}
      className={`cursor-pointer  hover:text-primary lg:text-lg  text-md font-semibold px-2 transition-all hover:-translate-y-1 hover:scale-110 duration-300 gap-6 space-y-6" ${
        pathName === link.url ? "text-primary" : "text-black"
      }`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
