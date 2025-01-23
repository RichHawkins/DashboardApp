import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth()

  if (!userId) {
    redirect("/")
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">{children}</main>
      </div>
    </div>
  )
}

