import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [categories, setCategories] = useState("home")
  return (
    <>
<Navbar setCategories={setCategories} categories={categories}/>
    </>
  )
}

export default App
