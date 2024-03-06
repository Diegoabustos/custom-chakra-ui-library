// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
 components: {
    CustomButton: {
      baseStyle: {
        // Base styles for your component
      },
      variants: {
        solid: {
          // Styles for the 'solid' variant
        },
        outline: {
          // Styles for the 'outline' variant
        },
      },
    },
 },
});

export default theme;
