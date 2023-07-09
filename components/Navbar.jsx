"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currPath = usePathname();
  return (
    <nav className=" flex justify-between p-3 bg-white bg-opacity-10 backdrop-blur-sm  text-grayBase border-b-2 border-gold ">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="./logo.svg"
          alt="Shufflex logo"
          className="object-contain hover:animate-spin"
          width={25}
          height={25}
        />
        <p className="font-bold text-lg bg-gradient-to-l from-gold to-yellow-500 bg-clip-text text-transparent text-gold">
          ShuffleX
        </p>
      </Link>
      <ul className="flex gap-4 mr-4">
        <li className="hover:text-gold px-2">
          <Link href="/" className={currPath === "/" ? "text-gold" : ""}>
            <p className="">Shuffler</p>
          </Link>
        </li>
        <li className=" hover:text-gold px-2">
          <Link
            href="/cointoss"
            className={currPath === "/cointoss" ? "text-gold" : ""}
          >
            <p className="">Coin Toss</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
