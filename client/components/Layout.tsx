'use client'; // ⬅️ Ensures React Hooks (like useDisclosure) and interactivity run in the browser

import { AppShell, Burger, Group, Title, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import React from 'react';

// This is the default exported component for the main dashboard frame
export default function Layout({ children }: { children: React.ReactNode }) {
  // Hook to manage the sidebar open/close state
  const [opened, { toggle }] = useDisclosure(); 

  return (
    <AppShell
      header={{ height: 60 }} // Header is 60px tall
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened, desktop: !opened }, // Sidebar collapses on small screens
      }}
      padding="md"
    >
      {/* 1. THE HEADER */}
      <AppShell.Header>
        <Group h="100%" px="md">
          {/* Burger icon to open/close the sidebar */}
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          
          {/* Wrap the Title in the Next.js Link component for proper routing */}
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Title order={2}>
              GDIP | Automated Confidence Score
            </Title>
          </Link>
        </Group>
      </AppShell.Header>

      {/* 2. THE NAVBAR */}
      <AppShell.Navbar p="md">
        <Title order={4}>Navigation</Title>
        
        {/* Navigation Link for the Metrics Dashboard */}
        <Link href="/" passHref style={{ textDecoration: 'none', marginTop: '10px' }}>
          <Anchor component="span" style={{ color: 'var(--mantine-color-teal-6)' }}>
            Metrics Dashboard
          </Anchor>
        </Link>
      </AppShell.Navbar>

      {/* 3. THE MAIN CONTENT AREA */}
      <AppShell.Main>
        {children} {/* This is where the MetricsTable or other pages are rendered */}
      </AppShell.Main>
    </AppShell>
  );
}