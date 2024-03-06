// components/CustomButton.tsx
import React from 'react';
import { Button as ChakraButton, ButtonProps, useStyleConfig } from '@chakra-ui/react';

export interface CustomButtonProps extends ButtonProps {
 variant?: 'solid' | 'outline';
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, variant = 'solid', ...props }) => {
 const styles = useStyleConfig('CustomButton', { variant });

 return (
    <ChakraButton sx={styles} {...props}>
      {children}
    </ChakraButton>
 );
};

export default CustomButton;
