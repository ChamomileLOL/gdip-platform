import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
// ⬇️ REMOVED MantineEmotionProvider from here
import { ColorSchemeScript, MantineProvider } from '@mantine/core'; 
import { Notifications } from '@mantine/notifications';
import { theme } from '../lib/theme';
import React from 'react';
import QueryProvider from '../components/QueryProvider'; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <QueryProvider> 
          {/* ⬅️ REMOVED THE WRAPPING TAGS */}
          <MantineProvider theme={theme}>
            <Notifications position="top-right" zIndex={1000} />
            {children} 
          </MantineProvider>
          {/* ⬆️ REMOVED THE WRAPPING TAGS */}
        </QueryProvider>
      </body>
    </html>
  );
}