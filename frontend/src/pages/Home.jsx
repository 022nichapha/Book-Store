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
      
      // ✅ ตรวจว่าข้อมูลมาจาก data หรือไม่
      const data = Array.isArray(res.data)
        ? res.data
        : Array.isArray(res.data.data)
        ? res.data.data
        : []

      setItems(data)
    } catch (e) {
      console.error(e)
      alert('โหลดรายการล้มเหลว')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  const handleDelete = async (id) => {
    if (!confirm('ต้องการลบใช่หรือไม่?')) return
    try {
      await deleteItem(id)
      setItems((prev) => prev.filter((i) => i.itemId !== id))
    } catch (e) {
      alert('ลบไม่สำเร็จ')
    }
  }

  return (
    <div className="container mt-6 space-y-4">
      <h1 className="text-2xl font-bold">รายการสินค้า</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-4">
          {items.length === 0 && <p>ยังไม่มีสินค้าในระบบ</p>}
          
          {/* ✅ ใช้ item.itemId แทน item.id */}
          {Array.isArray(items) &&
            items.map((item) => (
              <ItemCard key={item.itemId} item={item} onDelete={handleDelete} />
            ))}
        </div>
      )}
    </div>
  )
}
