// customTheme.tsx
import { Theme } from '@aws-amplify/ui-react';

export const customTheme: Theme = {
  name: 'custom-theme',
  tokens: {
    colors: {
      brand: {
        primary: { value: '#0066cc' },  // Main primary color for brand
        secondary: { value: '#ff9900' },  // Secondary color for interactive elements
      },
      font: {
        primary: { value: '#333333' },  // Default font color
        secondary: { value: '#666666' },  // Secondary font color
      },
      background: {
        primary: { value: '#f5f5f5' },  // Light background color
        secondary: { value: '#ffffff' },  // White background color
      },
    },
    space: {
      small: { value: '8px' },
      medium: { value: '16px' },
      large: { value: '24px' },
    },
    radii: {
      small: { value: '4px' },
      medium: { value: '8px' },
    },
    components: {
      button: {
        primary: {
          backgroundColor: { value: '{colors.brand.primary}' },
          color: { value: '#ffffff' },
          _hover: {
            backgroundColor: { value: '{colors.brand.secondary}' },
          },
        }
      },
  }
}
};


// import { Button, ThemeProvider } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css'; // default theme

// export const customTheme = {
//   name: 'custom-button-theme',
//   tokens: {
//     components: {
//       button: {
//         // this will affect the font weight of all Buttons
//         fontWeight: { value: '{fontWeights.black.value}' },
//         // this will only style Buttons which are the "primary" variation
//         primary: {
//           backgroundColor: { value: 'rebeccapurple' },
//           _hover: {
//             backgroundColor: { value: 'hotpink' },
//           },
//         },
//       },
//     },
//   },
// };