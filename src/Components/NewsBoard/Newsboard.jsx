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
<div className="container">
{latestNews.slice(0,5).map((val,id)=>(
  <div className="tile" key={id}>
       {val.urltoImage ?(
         <img src={val.urltoImage} alt="" />
        ):(
         <img src={"https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png" }alt="" />
       )} 
    </div>
    
   
))}
    
</div>
    </>
  )
}

export default Newsboard
