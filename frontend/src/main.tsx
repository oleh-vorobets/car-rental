import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { AuthProvider } from './providers/AuthProvider/AuthProvider.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './pages/ErrorPage.tsx';
import { AxiosProvider } from './providers/AxiosProvider.tsx';
import { Toaster } from 'react-hot-toast';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onReset={() => (location.href = '/')}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AxiosProvider>
            <Toaster />
            <App />
            {/* <ReactQueryDevtools /> */}
          </AxiosProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>
);
