'use client'; // This component fetches data, so it must run on the Client.

import { useQuery } from '@tanstack/react-query';
// ⬇️ These imports will now work because api.ts exists
import { fetchMetrics, Metric } from '../lib/api'; 
import { Table, Badge, Loader, Center, Text, Title, Paper } from '@mantine/core';
import React from 'react';

// This function determines the color of the status badge based on its value
const getStatusColor = (status: Metric['status']): string => {
  switch (status) {
    case 'Validated':
      return 'gdip-validated'; 
    case 'Draft':
      return 'gdip-draft';     
    case 'Retired':
      return 'gdip-retired';   
    default:
      return 'gray';
  }
};

// This component draws the actual table row for a single metric
const MetricRow = ({ metric }: { metric: Metric }) => {
  const statusColor = getStatusColor(metric.status);
  
  return (
    <Table.Tr key={metric._id}>
      <Table.Td>{metric.name}</Table.Td>
      <Table.Td>{metric.owner}</Table.Td>
      <Table.Td>
        <Badge color={statusColor} variant="filled">
          {metric.status}
        </Badge>
      </Table.Td>
      <Table.Td>{metric.sourceReliability}</Table.Td>
      <Table.Td>{metric.schemaConsistency}</Table.Td>
      <Table.Td>{metric.volume}</Table.Td>
      <Table.Td>
        <Text fw={700} size="lg" c="teal">
          {metric.automatedConfidenceScore.toFixed(2)}% 
        </Text>
      </Table.Td>
    </Table.Tr>
  );
};

// This is the main table component
export function MetricsTable() {
  // Use the Smart Data Clerk to fetch and manage the data
  const { data, isLoading, isError } = useQuery<Metric[]>({ // ⬅️ Explicitly defining the type here resolves the last few errors
    queryKey: ['metrics'],
    queryFn: fetchMetrics,
    staleTime: 5 * 60 * 1000, 
    refetchOnWindowFocus: true,
  });

  // Display the status based on what the Smart Clerk is doing
  if (isLoading) {
    return (
      <Center my="xl">
        <Loader color="teal" size="xl" />
        <Title order={3} ml="md">Fetching Metric Governance Data...</Title>
      </Center>
    );
  }

  // Ensure data exists before trying to access it
  if (isError || !data) {
    return (
      <Paper p="xl" shadow="md" withBorder>
        <Title order={3} c="red">Data Retrieval Error</Title>
        <Text>Could not connect to the MERN Server (Port 5000) or retrieve data.</Text>
      </Paper>
    );
  }

  // Final render of the table
  return (
    <Paper p="xl" shadow="md" withBorder>
      <Title order={3} mb="lg">Metrics Governance & Confidence Scores ({data.length})</Title>
      
      <Table striped highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Metric Name</Table.Th>
            <Table.Th>Owner</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Source Reliability (50%)</Table.Th>
            <Table.Th>Schema Consistency (30%)</Table.Th>
            <Table.Th>Volume (20%)</Table.Th>
            <Table.Th>Automated Confidence Score (ACS)</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((metric) => (
            <MetricRow key={metric._id} metric={metric} />
          ))}
        </Table.Tbody>
      </Table>
    </Paper>
  );
}