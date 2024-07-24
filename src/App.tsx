import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
// import './reset.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <main className="py-4 container">
          <Outlet />
        </main>
      </QueryClientProvider>
    </>
  );
}

export default App;
