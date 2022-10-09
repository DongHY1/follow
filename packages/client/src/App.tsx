import './global.css';
import { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { getFetch } from '@trpc/client';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { trpc } from './utils/trpc';
import LoginRegisterForm from './components/LoginRegisterForm';

function AppContent() {
  const { data: res } = trpc.useQuery(['users.list']);
  const [isLogin] = useState<boolean>(true);
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
        Follow <span className="text-purple-300">App</span>
      </h1>
      <LoginRegisterForm isLogin={false} />
    </main>
  );
}

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      })
  );
  const url = 'http://localhost:8000/api/trpc';
  const links = [
    loggerLink(),
    httpBatchLink({
      maxBatchSize: 10,
      url,
    }),
  ];
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links,
      fetch: async (input, init?) => {
        const fetch = getFetch();
        return fetch(input, {
          ...init,
          credentials: 'include',
        });
      },
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
