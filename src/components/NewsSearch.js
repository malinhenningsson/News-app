import React, { useState, useEffect, useRef } from 'react';
import useFetch from '../hooks/useFetch';
import Moment from 'react-moment';

const NewsSearch = () => {
    const [query, setQuery] = useState('');
    const queryRef = useRef();
    const [data, isLoading, error, setUrl] = useFetch('');

    useEffect(() => {
        queryRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (query.length < 3) {
            return;
        }
        setUrl(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_NEWSAPI_APIKEY}`);
    };

    const renderFetchedResult = (articles) => {
        console.log(articles);
        return articles.map((article, index) => (
            <div key={index} className="search-result-item">
                <h2>{article.title}</h2>
                <p><span className="small-info-text">
                    <Moment format="YYYY-MM-DD hh:mm">{article.publishedAt}</Moment> (<Moment fromNow>{article.publishedAt}</Moment>)
                </span></p>
                <img src={article.urlToImage} alt="content related" />
                <p>{article.description}</p>
                <a href={article.url} className="read-more-link">Read entire article</a>
            </div>
        ))
    };

    return (
        <div className="search-container">
            <h1>Search</h1>

            <form onSubmit={handleSubmit}>
				<div className="input-group">
					<input
						onChange={(e) => setQuery(e.target.value)}
                        ref={queryRef}
                        value={query}
						type="text"
						className="form-control"
						placeholder="Search for a specific topic"
					/>

					<button type="submit">Search</button>
				</div>
			</form>

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
                            <div className="search-result">
                                {renderFetchedResult(data.articles)}
                            </div>
                        ) : ('')
                    )
                )
            }
        </div>
    );
}
 
export default NewsSearch;