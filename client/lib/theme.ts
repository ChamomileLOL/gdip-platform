import { createTheme, MantineColorsTuple } from '@mantine/core';

// HELPER: This function creates an array of 10 identical colors,
// which satisfies Mantine's requirement for a complete shade palette (0-9).
const createStatusColor = (color: string): MantineColorsTuple => 
  [color, color, color, color, color, color, color, color, color, color];

// This is the GDIP's official style guide.
export const theme = createTheme({
  primaryColor: 'teal',
  
  fontFamily: 'Roboto, sans-serif', 
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '40px',
  },
  
  // FIX: Provide 10 shades for each custom color to fix the TypeScript error.
  colors: {
    'gdip-validated': createStatusColor('#20c997'), // Green for Validated
    'gdip-draft': createStatusColor('#fcc419'),     // Yellow for Draft
    'gdip-retired': createStatusColor('#fa5252'),   // Red for Retired
  }
});