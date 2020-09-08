import { useEffect, useState } from 'react';

const useFecth = (initialUrl, initialData) => {
    const [url, setUrl] = useState(initialUrl);
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if(!url) {
                return;
            }
            console.log('Fetching data with url: ', url);
            setIsLoading(true);

            try {
                const res = await fetch(url);
                const data = await res.json();
                console.log(data);
                setData(data);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();

    }, [url]);

    return [data, isLoading, error, setUrl];
}
 
export default useFecth;