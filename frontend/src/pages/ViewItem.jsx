import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getItemById } from '../services/api'


export default function ViewItem(){
const { id } = useParams()
const [item, setItem] = useState(null)


useEffect(()=>{
const load = async ()=>{
try{
const res = await getItemById(id)
setItem(res.data)
}catch(e){ alert('โหลดไม่สำเร็จ') }
}
load()
}, [id])


if(!item) return <div className="container mt-6">Loading...</div>


return (
<div className="container mt-6">
<Link to="/" className="text-sm">← Back</Link>
<div className="mt-4 grid grid-cols-3 gap-6">
<img src={item.coverImage || 'https://via.placeholder.com/240x320'} alt={item.title} className="col-span-1 w-full h-auto rounded" />
<div className="col-span-2">
<h1 className="text-2xl font-bold">{item.title}</h1>
<p className="text-sm">{item.author} • {item.publisher} • {item.publishYear}</p>
<p className="mt-3">{item.description}</p>


<div className="mt-4 space-y-1 text-sm">
<div>ISBN: {item.isbn}</div>
<div>Category: {item.category}</div>
<div>Location: {item.location}</div>
<div>Status: {item.status}</div>
</div>
</div>
</div>
</div>
)
}