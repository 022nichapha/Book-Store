import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(){
return (
<nav className="bg-white shadow-sm">
<div className="container flex items-center justify-between">
<Link to="/" className="font-bold text-xl">📚 Bookshop</Link>
<div className="space-x-3">
<Link to="/create" className="px-3 py-1 rounded-md border">Add Item</Link>
</div>
</div>
</nav>
)
}