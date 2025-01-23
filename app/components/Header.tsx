"use client"

import { UserButton } from "@clerk/nextjs"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Organization Logo" width={40} height={40} />
          <h1 className="ml-4 text-2xl font-bold text-brand-primary">Organization Dashboard</h1>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  )
}

