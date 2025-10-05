import React, { useEffect, useState } from 'react'
import { getItems, deleteItem } from '../services/api'
import ItemCard from '../components/ItemCard'

export default function Home() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchItems = async () => {
    try {
      setLoading(true)
      const res = await getItems()
      const data = Array.isArray(res.data) ? res.data : res.data.data || []
      setItems(data)
    } catch (e) {
      console.error(e)
      alert('โหลดรายการล้มเหลว')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchItems() }, [])

  const handleDelete = async (id) => {
    if (!confirm('ต้องการลบใช่หรือไม่?')) return
    try {
      await deleteItem(id)
      setItems(prev => prev.filter(i => i.itemId !== id))
    } catch (e) { alert('ลบไม่สำเร็จ') }
  }

  return (
    <div className="container mx-auto mt-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-700">Bookshop Catalog</h1>
      {loading ? <p className="text-center text-gray-500">Loading...</p> :
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.length === 0 && <p className="col-span-full text-center text-gray-400">ยังไม่มีสินค้าในระบบ</p>}
          {items.map(item => <ItemCard key={item.itemId} item={item} onDelete={handleDelete} />)}
        </div>}
    </div>
  )
}
