import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './utils/i18n.ts';
import { Provider } from 'react-redux';
import store from './store';
import { CssBaseline } from '@mui/material';
import { NotificationProvider } from '@/NotificationContext.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
    <Router>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </Router>
  </Provider>,
  // </StrictMode>,
);
