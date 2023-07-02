"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" flex justify-between  m-6 p-3 rounded-full border-2 border-black  bg-brown">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/dice.svg"
          alt="Shufflex logo"
          className="object-contain"
          width={25}
          height={25}
        />
        <p className="font-bold text-xl">ShuffleX</p>
      </Link>
      <ul className="flex gap-4 mr-4">
        <li className="hover:bg-yellow hover:outline hover:outline-black rounded-full px-2">
          <Link href="/" className="text-md hover:bg-yellow">
            <p className="font-bold">Shuffler</p>
          </Link>
        </li>
        <li className="hover:bg-yellow hover:outline hover:outline-black rounded-full px-2">
          <Link href="/cointoss" className="text-md hover:bg-yellow">
            <p className="font-bold">Coin Toss</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
