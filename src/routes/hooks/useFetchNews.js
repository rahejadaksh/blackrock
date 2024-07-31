// src/hooks/useFetchNews.js
import { useState, useEffect } from 'react';

const useFetchNews = (query) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const API_KEY = 'fb8693a9f80b4072b3fefb0651a44fe2'; // Replace with your actual API key
      const url = `https://newsapi.org/v2/everything?q=${query}&from=2024-07-30&sortBy=popularity&apiKey=${API_KEY}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setNews(data.articles);
      } catch (fetchError) { // Renamed error to fetchError
        setError(fetchError);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [query]);

  return { news, loading, error };
};

export default useFetchNews;
