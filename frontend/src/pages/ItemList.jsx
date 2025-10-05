import React, { useEffect, useState } from "react";
import { getItems, deleteItem } from "../services/api.js";
import ItemCard from "../components/ItemCard";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const { data } = await getItems();
      setItems(data);
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("คุณต้องการลบสินค้านี้ใช่หรือไม่?")) {
      await deleteItem(id);
      fetchItems(); // โหลดข้อมูลใหม่
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📚 ร้านหนังสือ</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <ItemCard key={item.itemId} item={item} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
