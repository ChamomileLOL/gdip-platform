import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { ColorSchemeScript } from '@mantine/core';
import MantineWrapper from '../components/MantineWrapper';
import React from 'react';
import QueryProvider from '../components/QueryProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ADD THIS PROP: suppressHydrationWarning
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <QueryProvider>
          <MantineWrapper>
            {children}
          </MantineWrapper>
        </QueryProvider>
      </body>
    </html>
  );
}
