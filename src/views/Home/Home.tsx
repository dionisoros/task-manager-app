import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import RouterUrl from '@/types/RouterUrl.ts';
import { fadeInDown, pulse } from './styles/animations';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Home: React.FC = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    height="100vh"
    textAlign="center"
    gap="2rem"
    padding="2rem"
  >
    <Box
      sx={{
        animation: `${fadeInDown} 1.5s ease-in-out`,
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3">Hello, mate!</Typography>
      <EmojiEmotionsIcon sx={{ fontSize: '3rem' }} />
    </Box>
    <Button
      component={Link}
      to={RouterUrl.Tasks}
      variant="contained"
      color="primary"
      size="large"
      sx={{
        animation: `${pulse} 1.5s infinite`,
        padding: '0.75rem 2rem',
      }}
    >
      View Tasks
    </Button>
  </Box>
);

export default Home;
