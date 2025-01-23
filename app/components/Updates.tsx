"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"

type Update = {
  id: number
  content: string
  date: string
}

export default function Updates() {
  const { user } = useUser()
  const [updates, setUpdates] = useState<Update[]>([
    { id: 1, content: "Welcome to the new dashboard!", date: "2023-06-01" },
  ])
  const [newUpdate, setNewUpdate] = useState("")

  const addUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    if (newUpdate) {
      setUpdates([{ id: Date.now(), content: newUpdate, date: new Date().toISOString().split("T")[0] }, ...updates])
      setNewUpdate("")
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-brand-primary">Important Updates</h2>
      {user?.publicMetadata?.role === "admin" && (
        <form onSubmit={addUpdate} className="mb-4">
          <textarea
            value={newUpdate}
            onChange={(e) => setNewUpdate(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            placeholder="Enter a new update..."
          />
          <button type="submit" className="bg-brand-accent text-white px-4 py-2 rounded hover:bg-brand-accent-dark">
            Post Update
          </button>
        </form>
      )}
      <div className="space-y-4">
        {updates.map((update) => (
          <div key={update.id} className="border-b pb-2">
            <p>{update.content}</p>
            <p className="text-sm text-gray-500 mt-1">{update.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

