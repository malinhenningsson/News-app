import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const LatestNews = () => {
    let url = 'http://newsapi.org/v2/top-headlines?' +
            'country=se&' +
            `apiKey=${process.env.REACT_APP_NEWSAPI_APIKEY}`;
    useFetch(url)

    return (
        <div>
            <h1>Latest News</h1>
        </div>
    );
}
 
export default LatestNews;