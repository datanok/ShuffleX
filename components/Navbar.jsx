"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" flex justify-between p-5 bg-white bg-opacity-10 backdrop-blur-sm  text-grayBase border-b-2 border-gold ">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="./dice.svg"
          alt="Shufflex logo"
          className="object-contain"
          width={25}
          height={25}
        />
        <p className="font-bold text-gold text-xl">ShuffleX</p>
      </Link>
      <ul className="flex gap-4 mr-4">
        <li className="hover:border-b-2 border-white hover:text-white px-2">
          <Link href="/" className="text-md hover:text-white">
            <p className="font-bold">Shuffler</p>
          </Link>
        </li>
        <li className="hover:border-b-2 border-white hover:text-white px-2">
          <Link href="/cointoss" className="text-md ">
            <p className="font-bold">Coin Toss</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
