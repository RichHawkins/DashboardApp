"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, MessageSquare, LinkIcon, Bell } from "lucide-react"

const navItems = [
  { name: "Calendar", href: "/dashboard", icon: Calendar },
  { name: "Chat", href: "/dashboard/chat", icon: MessageSquare },
  { name: "Useful Links", href: "/dashboard/links", icon: LinkIcon },
  { name: "Updates", href: "/dashboard/updates", icon: Bell },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className="bg-brand-secondary w-64 min-h-screen px-4 py-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center space-x-2 p-2 rounded-lg mb-2 ${
              isActive ? "bg-brand-accent text-white" : "text-brand-text hover:bg-brand-accent hover:text-white"
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </Link>
        )
      })}
    </nav>
  )
}

