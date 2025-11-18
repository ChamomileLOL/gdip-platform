'use client'; // ⬅️ THIS IS THE MAGIC LINE: RUN THIS ONLY ON THE CLIENT!

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';

// This component is the "Safe Launch Pad" for the Smart Data Clerk (QueryClient)

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  // Use state to initialize the QueryClient only once on the client side.
  // This avoids passing a complex class from the server.
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // Data is considered fresh for 1 minute by default
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}