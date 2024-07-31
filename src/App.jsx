import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Newsboard from './Components/NewsBoard/Newsboard'
import { Provider } from 'react-redux'


function App() {
  const [categories, setCategories] = useState("home")
  return (
    <>
<Navbar setCategories={setCategories} categories={categories}/>
<Newsboard/>


    </>
  )
}

export default App
