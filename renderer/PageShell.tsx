import React, { Suspense } from 'react';
import {
  RelayEnvironmentProvider
} from 'react-relay/hooks';
import RelayEnvironment from '../libs/RelayEnvironment';
import { Link } from './Link';
import type { PageContext } from './types';
import { PageContextProvider } from './usePageContext';

export function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Link className="navitem" href="/">
          Home
        </Link>
        <RelayEnvironmentProvider environment={RelayEnvironment}>
          <Suspense fallback={'Loading...'}>
            {children}
          </Suspense>
        </RelayEnvironmentProvider>
      </PageContextProvider>
    </React.StrictMode>
  )
}

