'use client';

const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Reload page</button>
    </div>
  );
};

export default ErrorFallback;
