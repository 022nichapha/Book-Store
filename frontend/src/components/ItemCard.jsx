import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemCard({ item, onDelete }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        src={item.coverImage || 'https://via.placeholder.com/200x300?text=No+Image'}
        alt={item.title || 'No title'}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
        <p className="text-sm text-gray-500">{item.author} • {item.publisher} • {item.publishYear}</p>
        <p className="mt-2 text-gray-600 text-sm line-clamp-3">{item.description || 'ไม่มีคำอธิบาย'}</p>
        <div className="mt-3 flex gap-2">
          <Link to={`/view/${item.itemId}`} className="flex-1 text-center py-1 rounded border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">View</Link>
          <Link to={`/edit/${item.itemId}`} className="flex-1 text-center py-1 rounded border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition">Edit</Link>
          <button onClick={() => onDelete(item.itemId)} className="flex-1 text-center py-1 rounded border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition">Delete</button>
        </div>
      </div>
    </div>
  )
}
