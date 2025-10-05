import React, { useState, useEffect } from 'react'
import { createItem, getItemById, updateItem } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'

export default function ItemForm({ isEdit = false }) {
  const navigate = useNavigate()
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publisher, setPublisher] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (isEdit && id) {
      getItemById(id).then(res => {
        const item = res.data
        setTitle(item.title)
        setAuthor(item.author)
        setPublisher(item.publisher)
        setPublishYear(item.publishYear)
        setDescription(item.description)
      }).catch(err => alert('โหลดข้อมูลไม่สำเร็จ'))
    }
  }, [id, isEdit])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = { title, author, publisher, publishYear, description }
    try {
      if (isEdit) await updateItem(id, payload)
      else await createItem(payload)
      alert('บันทึกสำเร็จ')
      navigate('/')
    } catch (err) {
      console.error(err)
      alert('บันทึกไม่สำเร็จ')
    }
  }

  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-2xl font-bold mb-4">{isEdit ? 'แก้ไขสินค้า' : 'เพิ่มสินค้าใหม่'}</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-lg">
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}
               className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"/>
        <input type="text" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)}
               className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"/>
        <input type="text" placeholder="Publisher" value={publisher} onChange={e => setPublisher(e.target.value)}
               className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"/>
        <input type="number" placeholder="Publish Year" value={publishYear} onChange={e => setPublishYear(e.target.value)}
               className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"/>
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}
                  className="border rounded px-3 py-2 col-span-full focus:ring-2 focus:ring-blue-400"></textarea>
        <button type="submit" className="col-span-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Save</button>
      </form>
    </div>
  )
}
