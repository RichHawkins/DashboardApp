"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"

type Link = {
  id: number
  title: string
  url: string
}

export default function UsefulLinks() {
  const { user } = useUser()
  const [links, setLinks] = useState<Link[]>([
    { id: 1, title: "Student Portal", url: "https://student.example.com" },
    { id: 2, title: "Library Resources", url: "https://library.example.com" },
  ])
  const [newLink, setNewLink] = useState({ title: "", url: "" })

  const addLink = (e: React.FormEvent) => {
    e.preventDefault()
    if (newLink.title && newLink.url) {
      setLinks([...links, { ...newLink, id: Date.now() }])
      setNewLink({ title: "", url: "" })
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-brand-primary">Useful Links</h2>
      <ul className="space-y-2 mb-4">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      {user?.publicMetadata?.role === "admin" && (
        <form onSubmit={addLink} className="space-y-2">
          <input
            type="text"
            placeholder="Link Title"
            value={newLink.title}
            onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="url"
            placeholder="Link URL"
            value={newLink.url}
            onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="bg-brand-accent text-white px-4 py-2 rounded hover:bg-brand-accent-dark">
            Add Link
          </button>
        </form>
      )}
    </div>
  )
}

