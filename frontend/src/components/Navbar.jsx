import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">Bookshop</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
        <Link to="/create" className="hover:text-yellow-300 transition">Add Item</Link>
      </div>
    </nav>
  )
}
