import { FunctionComponent } from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import RouterUrl from '@/types/router/RouterUrl.ts';

const Home: FunctionComponent = () => {
  return (
    <Container maxWidth="xl">
      <Box textAlign="center" mt={5}>
        <Typography variant="h2" gutterBottom>
          Task Management App
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={RouterUrl.Tasks}
        >
          View Tasks
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
