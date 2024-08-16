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
{/* <div className="card-outer">
<div className="card">
{latestNews.slice(0,5).map((val, id) => (
      
      <>
            {val.urlToImage ? (
            <img src={val.urlToImage} alt="news"/>
          ) : (
          <img src={"https://c1.wallpaperflare.com/preview/21/93/67/news-yellow-newspaper-3d.jpg"} className='img'/>
          )}
               <p>{val.title}</p>
             </>
            
           ))}
</div>

</div> */}
                 <div className="grid-container">
                {latestNews.slice(0, 5).map((val, id) => (
                    <div className="card" key={id}>
                        <div className="card-image">
                            {val.urlToImage ? (
                                <img src={val.urlToImage} alt="news" />
                            ) : (
                                <img src={"https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"} alt="news" />
                            )}
                        </div>
                        <div className="card-content">
                            <h3>{val.title}</h3>
                            <button className="read-more-btn">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
    </>
  )
}

export default Newsboard
