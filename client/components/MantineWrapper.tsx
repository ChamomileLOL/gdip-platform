'use client'; // ⬅️ MAGIC SIGN: Run this only in the browser!

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { theme } from '../lib/theme';
import React from 'react';

// This component isolates all the client-side styling tools to prevent conflicts.
export default function MantineWrapper({ children }: { children: React.ReactNode }) {
  return (
    // Step 1: Apply the theme and core styles
    <MantineProvider theme={theme}>
      {/* Step 2: Install the Global Notification System */}
      <Notifications position="top-right" zIndex={1000} />
      {children}
    </MantineProvider>
  );
}