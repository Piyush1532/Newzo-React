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

<div className="card-outer">
{latestNews.map((val, id) => (
      
      <div key={id} className='card'>
            {val.urlToImage ? (
            <img src={val.urlToImage} alt="news" className='img' />
          ) : (
          <img src={"https://c1.wallpaperflare.com/preview/21/93/67/news-yellow-newspaper-3d.jpg"} className='img'/>
          )}
               <p>{val.title}</p>
             </div>
            
           ))}
</div>

    </>
  )
}

export default Newsboard
