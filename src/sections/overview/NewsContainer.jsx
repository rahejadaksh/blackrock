import React, { useState } from 'react';
import useFetchNews from 'src/hooks/useFetchNews';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppNewsUpdate from './app-news-update';
import { useTranslation } from 'react-i18next';

const NewsContainer = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const { news, loading, error } = useFetchNews('trading');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (news.length === 0) return <div>No news available.</div>;

  // Paginate locally
  const totalResults = news.length;
  const totalPages = Math.ceil(totalResults / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedNews = news.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <Box>
      <AppNewsUpdate
        title={t('newsUpdate')}
        list={paginatedNews.map((article) => ({
          id: article.url, // Unique ID for each news item
          title: article.title,
          description: article.description,
          image: article.urlToImage || '/default-image.jpg', // Fallback image
          postedAt: new Date(article.publishedAt),
        }))}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button
          variant="contained"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Box sx={{ mx: 2 }}>
          Page {page} of {totalPages}
        </Box>
        <Button
          variant="contained"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default NewsContainer;
