import { FunctionComponent, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, Box, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './utils/theme';
import Home from './views/Home';
import Tasks from './views/Tasks';
import './App.css';
import Navbar from './components/Navbar.tsx';
import TaskEdit from './views/Tasks/components/TaskEdit';
import RouterUrl from '@/types/router/RouterUrl.ts';

const App: FunctionComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column" height="100%">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        {/*<Box display="flex" flexDirection="column" height="100%">*/}
        <Routes>
          <Route path={RouterUrl.Home} element={<Home />} />
          <Route path={RouterUrl.Tasks} element={<Tasks />} />
          <Route path={RouterUrl.TaskEdit} element={<TaskEdit />} />
        </Routes>
        {/*</Box>*/}
      </Box>
    </ThemeProvider>
  );
};

export default App;
