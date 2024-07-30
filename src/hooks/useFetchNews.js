import { useState, useEffect } from 'react';

const useFetchNews = (query) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
      const url = `https://newsapi.org/v2/everything?q=trading&from=2024-06-30&sortBy=publishedAt&apiKey=fb8693a9f80b4072b3fefb0651a44fe2`;

      console.log('Fetching URL:', url); // Debug log

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Response:', data); // Debug log
        setNews(data.articles);
      } catch (fetchError) {
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
