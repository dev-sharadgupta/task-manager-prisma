import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"; //Import manually if suggestion not working
import './index.css'
import App from './App.tsx'
import { store } from './_redux/store.ts';
import { Provider } from 'react-redux';
import { Toaster } from './components/ui/sonner.tsx';
import ThemeProvider from './providers/theme-provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider >
        <Provider store={store}>
          <App />
          <Toaster richColors closeButton />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
