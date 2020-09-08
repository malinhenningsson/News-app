import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const LatestNews = () => {
    const [data, isLoading, error, setUrl] = useFetch('');

    useEffect(() => {
        setUrl('http://newsapi.org/v2/top-headlines?' + 'country=se&' + `apiKey=${process.env.REACT_APP_NEWSAPI_APIKEY}`);
    }, [setUrl]);

    const renderFetchedResult = (articles) => {
        console.log('Articles: ', articles);
        return articles.map((article, index) => (
            <div key={index} className="article-item">
                <img src={article.urlToImage} alt="article related url"/>
                <div className="article-item-text-content">
                    <h3>{article.title}</h3>
                    <p><span className="small-info-text">Published: {article.publishedAt}</span></p>
                    <p>{article.content}</p>
                    <p><span className="small-info-text">Read more: {article.url}</span></p> 
                </div>
            </div>
        ))
    }

    return (
        <div>
            <h1>The Latest News</h1>

            {
                isLoading ? (
                    <h2>Loading...</h2>
                ) : (
                    error ? (
                        <div>
                            <p>Something went wrong.</p>
                            <p>{error}</p>
                        </div>
                    ) : (
                        data && data.articles ? (
                            <div className="latest-news-articles">
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