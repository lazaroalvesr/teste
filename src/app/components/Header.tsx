'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";


export default function Header() {
  const [ativaMenu, setAtivaMenu] = useState(false)

  function toggle() {
    setAtivaMenu((ativaMenu) => !ativaMenu)
  }


  return (
    <div className="w-full border-b border-neutral-300">
      <header className="pb-3 lg:max-w-6xl m-auto mt-4 flex lg:items-center lg:justify-between">
        <div className="flex w-32 items-center lg:justify-between" >
          <div className=" ">
            <Link href="/" className="flex items-center">
              <Image
                src="/img/icone.png"
                alt="Icone Money"
                width={50}
                height={12}
              />
              <p className="pl-2 text-2xl">FinVue</p>
            </Link>
          </div>
          <div className="lg:hidden absolute right-6">
            <button onClick={() => toggle()}>
              <CiMenuFries />
            </button>
          </div>
          <div className=" lg:ml-12">
            <ul className={`flex gap-4 lg:static lg:h-auto ${ativaMenu ? 'absolute  bg-gray-50 left-0 w-full text-center top-20 h-96 pt-32 flex-col z-50' : "h-0 overflow-hidden"}`}>
              <li className="text-3xl lg:text-sm">
                <Link href={'/'}>
                  Personal
                </Link>
              </li>
              <li className="text-3xl lg:text-sm">
                <Link href={'/dasboard'}>
                  Dasboard
                </Link>
              </li>
              <li className="text-3xl lg:text-sm">
                <Link href={'/'}>
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
}