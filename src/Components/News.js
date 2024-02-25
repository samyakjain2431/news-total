import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import '../style.css'


const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateNews = async ()=>{
    let url = `https://inshortsapi.vercel.app/news?category=${props.category}`
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.data)
    setLoading(false)

    // this.setState({articles:  parsedData.articles, totalResults : parsedData.totalResults, loading:false})
  }

  useEffect(()=>{
    updateNews();
  },[])


  return (
    <div className='mb-[2rem] text-[2rem] font-semibold mx-[5%] main-body '>
      <h1 className='text-center'>News Total -<strong>{props.nkey}</strong> Headlines</h1>
      {loading && <Spinner/>}
      <div className="newsitems">
          {articles && articles.map((element)=>{
            console.log(element)
            return(
              <div key={element.id}>
                <NewsItem title ={element.title} content={element.content} imageUrl ={element.imageUrl} readMoreUrl= {element.readMoreUrl}/>
              </div>
            )
          })}
        </div>
    </div> 
  )
}


// News.prototypes = {
//   nkey :PropTypes.string,
//   category : PropTypes.string,

// }
// News.defaultProps = {
//   nkey : "National",
//   category : "national",
// }
export default News
