import React, { useState, useEffect, useRef } from 'react';
import useFetch from '../hooks/useFetch';

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
                <h3>{article.title}</h3>
                <p>Published: {article.publishedAt}</p>
                <p>Read article</p>
            </div>
        ))
    }    

    return (
        <div>
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

					<button type="submit" className="btn btn-success">Search</button>
				</div>
			</form>

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