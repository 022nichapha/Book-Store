import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreateItem from './pages/CreateItem'
import EditItem from './pages/EditItem'
import ViewItem from './pages/ViewItem'


export default function App(){
return (
<div className="min-h-screen bg-gray-50">
<Navbar />
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/create" element={<CreateItem/>} />
<Route path="/edit/:id" element={<EditItem/>} />
<Route path="/view/:id" element={<ViewItem/>} />
</Routes>
</div>
)
}