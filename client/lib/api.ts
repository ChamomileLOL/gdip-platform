import axios from 'axios';

// Get the Server's address from the .env.local file
const API_URL = process.env.NEXT_PUBLIC_API_URL; 

// The Blueprint for the Metric data structure
// TypeScript uses this interface to ensure the data is reliable.
export interface Metric {
  _id: string;
  name: string;
  description: string;
  owner: string;
  sourceReliability: number;
  schemaConsistency: number;
  volume: number;
  automatedConfidenceScore: number;
  status: 'Draft' | 'Validated' | 'Retired';
  createdAt: string;
  updatedAt: string;
}

// The Messenger's Job: Fetch all metrics from the MERN Server
export const fetchMetrics = async (): Promise<Metric[]> => {
  if (!API_URL) {
    throw new Error("API URL is not defined in environment variables.");
  }
  
  // Call the GET endpoint we created in Step 6
  const response = await axios.get(`${API_URL}/metrics`); 
  
  // The MERN server response is structured like { success: true, data: [...] }
  return response.data.data; 
};