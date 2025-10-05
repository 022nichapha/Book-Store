import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ItemForm from '../components/ItemForm'
import { getItemById, updateItem } from '../services/api'


export default function EditItem(){
const { id } = useParams()
const navigate = useNavigate()
const [item, setItem] = useState(null)


useEffect(()=>{
const load = async () => {
try{
const res = await getItemById(id)
setItem(res.data)
}catch(e){ alert('โหลดข้อมูลไม่สำเร็จ') }
}
load()
}, [id])


const handleSubmit = async (payload) => {
try{
await updateItem(id, payload)
alert('อัพเดตสำเร็จ')
navigate('/')
}catch(e){ alert('อัพเดตไม่สำเร็จ') }
}


if(!item) return <div className="container mt-6">Loading...</div>


return (
<div className="container mt-6">
<h1 className="text-2xl font-bold mb-4">แก้ไขสินค้า</h1>
<ItemForm initial={item} onSubmit={handleSubmit} />
</div>
)
}

