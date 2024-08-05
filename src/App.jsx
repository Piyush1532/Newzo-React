import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Newsboard from './Components/NewsBoard/Newsboard'
import { useDispatch } from 'react-redux'
import { getNews } from './Components/Redux/NewsSlice'



function App() {
  const [categories, setCategories] = useState("general")
  const dispatch=useDispatch()

  useEffect(()=>{
      dispatch(getNews(categories))
  },[categories,dispatch])
  return (
    <>
<Navbar setCategories={setCategories} categories={categories}/>
<Newsboard/>


    </>
  )
}

export default App
