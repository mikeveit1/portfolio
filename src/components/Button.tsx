import { Button as ChakraButton, type ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { type ReactNode } from 'react';

interface ButtonProps extends Omit<ChakraButtonProps, 'variant'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
} 

export const Button = ({ 
  children, 
  variant = 'primary',
  size = 'lg',
  ...props 
}: ButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          bg: 'white',
          color: 'black',
          _hover: { bg: 'gray.100', transform: 'translateY(-1px)' },
          _active: { transform: 'translateY(0px)' },
        };
      case 'secondary':
        return {
          variant: 'outline' as const,
          borderColor: 'gray.600',
          color: 'white',
          _hover: {
            borderColor: 'gray.400',
            bg: 'gray.900',
            transform: 'translateY(-1px)',
          },
          _active: { transform: 'translateY(0px)' },
        };
      default:
        return {};
    }
  };

  const baseStyles = {
    fontWeight: '600',
    px: { base: 6, md: 8 },
    py: 3,
    h: size === 'lg' ? 12 : 10,
    borderRadius: 'full',
    transition: 'all 0.2s',
  };

  return (
    <ChakraButton 
      {...baseStyles}
      {...getVariantStyles()}
      size={size}
      {...props}
    >
      {children}
    </ChakraButton>
  );
}; 