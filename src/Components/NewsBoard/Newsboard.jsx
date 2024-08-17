import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from '../Redux/NewsSlice'
import "./newsboard.css"

const Newsboard = ({categories}) => {
    let dispatch= useDispatch()
    let {latestNews}=useSelector((state)=>state.NewsData)
    useEffect(()=>{
        dispatch(getNews(categories))
        console.log(latestNews)
    },[dispatch])


  return (
    <>
          <h1>{categories.charAt(0).toUpperCase() + categories.slice(1)} News</h1>
<div className="container">
    {latestNews.slice(0,5).map((val,index)=>(
    <div key={index} className={`grid-item ${index === 0 ? 'large' : ''}`}>
        {val.urlToImage ? (
            <img src={val.urlToImage} alt="" />
        ) :(
            <img src={"https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq"} alt="" />
        )}
        <div className="content">
        {val.title.length > 18 ? val.title.slice(0, -9) + '...' : val.title}
            <p>{val.author}</p>
        </div>
    </div>
    ))}
</div>
    </>
  )
}

export default Newsboard

