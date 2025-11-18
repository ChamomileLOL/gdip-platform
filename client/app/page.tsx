import Layout from '../components/Layout'; 
import { Title, Container } from '@mantine/core'; 
import { MetricsTable } from '../components/MetricsTable'; // ⬅️ Must match the file name

// This is the main page that users see when they land on the GDIP.
export default function HomePage() {
  return (
    <Layout>
      <Container size="xl" fluid>
        {/* The main title for the dashboard */}
        <Title order={1} mb="md">Global Decision Intelligence Platform Dashboard</Title>
        <p>Welcome, Anjali. Use the ACS to validate strategic data and eliminate decision friction.</p>

        {/* The Metrics Table component, which fetches and displays data */}
        <MetricsTable />

      </Container>
    </Layout>
  );
}