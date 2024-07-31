import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from '../Redux/NewsSlice'
import "./newsboard.css"

const Newsboard = () => {
    let dispatch= useDispatch()
    let {latestNews}=useSelector((state)=>state.NewsData)
    useEffect(()=>{
        dispatch(getNews())
        console.log(latestNews)
    },[dispatch])


  return (
    <>
      <h1>Newsboard</h1>

      {latestNews.map((val,id)=>{
        return(
          <div>

<p>{val.title}</p>
<img src={val.urlToImage} alt="" className='img' />
          </div>
        )
      })}
    </>
  )
}

export default Newsboard
