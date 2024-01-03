'use client'

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
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
      <header className="pb-3 lg:max-w-6xl m-auto mt-4 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center lg:justify-between ml-3 lg:ml-0" >
          <div className="flex items-center">
            <Image
              src="/img/icone.png"
              alt="Icone Money"
              width={50}
              height={12}
            />
            <p className="pl-2 text-2xl">FinVue</p>
          </div>
          <div className="lg:hidden absolute right-6">
            <button onClick={() => toggle()}>
              <CiMenuFries />
            </button>
          </div>
          <div className=" lg:ml-12">
            <ul className={`flex lg:gap-4 lg:static lg:h-auto ${ativaMenu ? 'absolute left-32 bg-white top-32 flex-col ' : "h-0 overflow-hidden"}`}>
              <li className="text-3xl lg:text-sm">
                <Link href={'/'}>
                  Personal
                </Link>
              </li>
              <li className="text-3xl lg:text-sm">
                <Link href={'/'}>
                  Features
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
        <div className={`flex lg:static lg:h-auto ${ativaMenu ? 'absolute top-72 left-32' : "h-0 overflow-hidden"}`}>
          {/* <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <div>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="lg:w-30 border-2 border-blue-500 p-2 rounded-md">
                    Fazer Login
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </div> */}
        </div >
      </header>
    </div>
  )
}