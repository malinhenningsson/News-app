import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import Moment from 'react-moment';

const LatestNews = () => {
    const [data, isLoading, error, setUrl] = useFetch('');

    useEffect(() => {
        setUrl('http://newsapi.org/v2/top-headlines?' + 'country=se&' + `apiKey=${process.env.REACT_APP_NEWSAPI_APIKEY}`);
    }, [setUrl]);

    const renderFetchedResult = (articles) => {
        console.log('Articles: ', articles);
        return articles.map((article, index) => (
            <div key={index} className="article-item">
                {
                    article.urlToImage ? ( 
                        <img src={article.urlToImage} alt="article related url"/>
                    ) : ('')
                }
                <div className="article-item-text-content">
                    <h3>{article.title}</h3>
                    <p><span className="small-info-text">
                        <Moment format="YYYY-MM-DD hh:mm">{article.publishedAt}</Moment> (<Moment fromNow>{article.publishedAt}</Moment>)
                    </span></p>
                    <p>{article.content ? article.content : article.description}</p>
                    <a href={article.url} className="read-more-link">Read more</a> 
                </div>
            </div>
        ))
    }

    return (
        <div>
            <h1>Top Headlines</h1>

            {
                isLoading ? (
                    <div class="loader"></div>
                ) : (
                    error ? (
                        <div>
                            <p>Something went wrong.</p>
                            <p>{error}</p>
                        </div>
                    ) : (
                        data && data.articles ? (
                            <div className="news-articles">
                                {renderFetchedResult(data.articles)}
                            </div>
                        ) : (
                            ''
                        )
                    )
                )
            }
        </div>
    );
}
 
export default LatestNews;