import React, { useState, useEffect } from 'react'


const defaultCommon = {
title: '', author: '', category: '', publishYear: '', isbn: '', publisher: '', status: 'AVAILABLE', coverImage: '', description: '', location: '', addedDate: ''
}


export default function ItemForm({ initial = {}, onSubmit }){
const [form, setForm] = useState({...defaultCommon, ...initial})


useEffect(()=>{
setForm(prev => ({...prev, ...initial}))
}, [initial])


const handle = (e) => {
const { name, value } = e.target
setForm(prev => ({...prev, [name]: value}))
}


const submit = (e) => {
e.preventDefault()
// Basic validation
if(!form.title || !form.author) return alert('กรุณากรอก Title และ Author')
onSubmit(form)
}


return (
<form onSubmit={submit} className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input name="title" value={form.title} onChange={handle} placeholder="Title" className="border p-2 rounded" />
<input name="author" value={form.author} onChange={handle} placeholder="Author" className="border p-2 rounded" />
<input name="publisher" value={form.publisher} onChange={handle} placeholder="Publisher" className="border p-2 rounded" />
<input name="publishYear" value={form.publishYear} onChange={handle} placeholder="Publish Year" type="number" className="border p-2 rounded" />
<input name="isbn" value={form.isbn} onChange={handle} placeholder="ISBN" className="border p-2 rounded" />
<input name="category" value={form.category} onChange={handle} placeholder="Category" className="border p-2 rounded" />
<input name="location" value={form.location} onChange={handle} placeholder="Location" className="border p-2 rounded" />
<input name="coverImage" value={form.coverImage} onChange={handle} placeholder="Cover Image URL" className="border p-2 rounded" />
</div>


<textarea name="description" value={form.description} onChange={handle} placeholder="Description" className="w-full border p-2 rounded" rows={4} />


{/* Fields for polymorphism: edition, pageCount, language, genre, issn, volume, issue, series, volumeNumber etc. We'll provide generic fields and the backend will accept extras. */}
<div className="grid grid-cols-3 gap-3">
<input name="edition" value={form.edition || ''} onChange={handle} placeholder="Edition" className="border p-2 rounded" />
<input name="pageCount" value={form.pageCount || ''} onChange={handle} placeholder="Page Count" type="number" className="border p-2 rounded" />
<input name="language" value={form.language || ''} onChange={handle} placeholder="Language" className="border p-2 rounded" />
</div>


<div className="flex gap-2">
<button className="px-4 py-2 border rounded">Save</button>
</div>
</form>
)
}