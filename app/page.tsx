import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import LoginForm from "./components/LoginForm"

export default function Home() {
  const { userId } = auth()

  if (userId) {
    redirect("/dashboard")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-brand-primary">
      <LoginForm />
    </main>
  )
}

