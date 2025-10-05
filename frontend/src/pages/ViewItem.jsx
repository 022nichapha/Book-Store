import React, { useEffect, useState } from 'react'
import { getItemById } from '../services/api'
import { useParams, Link } from 'react-router-dom'

export default function ViewItem() {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    getItemById(id).then(res => setItem(res.data)).catch(err => alert('โหลดข้อมูลไม่สำเร็จ'))
  }, [id])

  if (!item) return <p className="text-center mt-6">Loading...</p>

  return (
    <div className="container mx-auto mt-6 bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={item.coverImage || 'https://via.placeholder.com/200x300?text=No+Image'} 
             alt={item.title} className="w-60 h-80 object-cover rounded"/>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{item.title}</h1>
          <p className="text-gray-600 mt-2">{item.author} • {item.publisher} • {item.publishYear}</p>
          <p className="mt-4 text-gray-700">{item.description}</p>
          <Link to={`/edit/${item.itemId}`} className="mt-4 inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">Edit Item</Link>
        </div>
      </div>
    </div>
  )
}
