import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemCard({ item, onDelete }) {
  return (
    <div className="border rounded-lg p-4 flex gap-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* ✅ ป้องกันรูปเสีย */}
      <img
        src={item.coverImage || 'https://via.placeholder.com/120x160?text=No+Image'}
        alt={item.title || 'No title'}
        className="w-24 h-32 object-cover rounded"
      />

      <div className="flex-1">
        {/* ✅ ป้องกัน undefined */}
        <h3 className="text-lg font-semibold">{item.title || 'ไม่ระบุชื่อเรื่อง'}</h3>
        <p className="text-sm text-gray-600">
          {item.author || 'ไม่ระบุผู้แต่ง'} • {item.publisher || 'ไม่ระบุสำนักพิมพ์'} • {item.publishYear || '-'}
        </p>

        {/* ✅ จำกัดความยาวคำอธิบาย */}
        <p className="mt-2 text-sm text-gray-700 line-clamp-3">
          {item.description || 'ไม่มีคำอธิบาย'}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            to={`/view/${item.itemId}`}
            className="px-3 py-1 border rounded text-sm hover:bg-blue-100 transition"
          >
            View
          </Link>
          <Link
            to={`/edit/${item.itemId}`}
            className="px-3 py-1 border rounded text-sm hover:bg-yellow-100 transition"
          >
            Edit
          </Link>
          <button
            onClick={() => onDelete(item.itemId)}
            className="px-3 py-1 border rounded text-sm text-red-600 hover:bg-red-100 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
