import { ErrorFallback, Header, Footer } from '../components';
import { Outlet } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';

const RootLayout = () => {
  return (
    <div className='root-layout'>
      <Header />
      <main className='main d-flex'>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => window.location.reload()}
        >
          <Outlet /> {/* render all pages here */}
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
