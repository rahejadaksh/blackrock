import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Card, CardContent, Divider, Box, Avatar, Grid } from '@mui/material';

const Blog = () => {
  const [posts, setPosts] = useState([
    {
      name: 'Alice Johnson',
      profilePic: 'https://randomuser.me/api/portraits/women/1.jpg',
      message: 'Just bought some stocks in tech companies. What do you guys think about the future of tech stocks?',
    },
    {
      name: 'Bob Smith',
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
      message: 'Can anyone recommend a good strategy for day trading? I’m looking to improve my skills.',
    },
    {
      name: 'Charlie Brown',
      profilePic: 'https://randomuser.me/api/portraits/men/3.jpg',
      message: 'I’m considering diversifying my portfolio with cryptocurrencies. Any advice or insights?',
    }
  ]);
  const [newPost, setNewPost] = useState('');

  const handlePostChange = (event) => {
    setNewPost(event.target.value);
  };

  const handleAddPost = () => {
    if (newPost.trim()) {
      // Add the new post directly to the state
      setPosts([
        ...posts,
        {
          name: 'Yuvraj Bhalla',
          profilePic: 'https://randomuser.me/api/portraits/men/4.jpg',
          message: newPost.trim(),
        }
      ]);
      setNewPost('');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Community Forum
      </Typography>

      <Box sx={{ mb: 4 }}>
        <TextField
          label="Write a new post"
          variant="outlined"
          fullWidth
          value={newPost}
          onChange={handlePostChange}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleAddPost}>
          Add Post
        </Button>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" gutterBottom>
        Recent Posts
      </Typography>

      {posts.length === 0 ? (
        <Typography variant="h6">No posts yet. Be the first to post!</Typography>
      ) : (
        posts.map((post, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar src={post.profilePic} alt={post.name} />
                </Grid>
                <Grid item xs>
                  <Typography variant="subtitle1" gutterBottom>
                    {post.name}
                  </Typography>
                  <Typography variant="body1">
                    {post.message}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
};

export default Blog;
