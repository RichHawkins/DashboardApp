"use client"

import { SignIn } from "@clerk/nextjs"
import Image from "next/image"

export default function LoginForm() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-center mb-6">
        <Image src="/logo.png" alt="Organization Logo" width={150} height={150} />
      </div>
      <SignIn />
    </div>
  )
}

