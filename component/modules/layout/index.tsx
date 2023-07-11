import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { LayoutWrap } from './styles';

interface ILayout {
  children: React.ReactNode;
}

const Fallback = ({ error }: { error: unknown }) => {
  console.log('error', error);
  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return <p>THERE is some ERROR...</p>;
};

const ErrorComponent = () => {
  const [error, setError] = useState(false);
  if (error) {
    throw new Error('Error occured');
  }
  return (
    <button type="button" onClick={() => setError(true)}>
      Error Fire
    </button>
  );
};

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <LayoutWrap>
      <div className="left">leftMenu</div>
      <ErrorBoundary FallbackComponent={Fallback}>
        <div className="content">
          {children}
          <ErrorComponent />
        </div>
      </ErrorBoundary>
    </LayoutWrap>
  );
};

export default Layout;
