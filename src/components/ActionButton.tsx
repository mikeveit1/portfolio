import { Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { type ReactNode } from 'react';

interface ActionButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  to?: string;
  external?: boolean;
  onClick?: () => void;
  flex?: number;
  w?: string;
  minW?: string;
  gap?: number;
  px?: number;
  py?: number;
}

export const ActionButton = ({ 
  children,
  variant = 'primary',
  href,
  to,
  external,
  onClick,
  flex,
  w = 'full',
  minW,
  gap = 2,
  px = 6,
  py = 3,
}: ActionButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          bg: 'white',
          color: 'black',
          border: 'none',
          _hover: { bg: 'gray.100', transform: 'translateY(-1px)' },
        };
      case 'secondary':
        return {
          bg: 'transparent',
          color: 'white',
          border: '1px solid',
          borderColor: 'gray.600',
          _hover: { borderColor: 'gray.400', transform: 'translateY(-1px)' },
        };
      default:
        return {};
    }
  };

  const buttonProps = {
    as: 'button' as const,
    px,
    py,
    borderRadius: 'full',
    fontWeight: '600',
    fontSize: 'sm',
    _active: { transform: 'translateY(0px)' },
    transition: 'all 0.2s',
    w,
    flex,
    minW,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap,
    ...getVariantStyles(),
  };

  if (href) {
    return (
      <Box asChild flex={flex}>
        <a 
          href={href} 
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          <Box {...buttonProps}>
            {children}
          </Box>
        </a>
      </Box>
    );
  }

  if (to) {
    return (
      <Box asChild flex={flex}>
        <RouterLink to={to}>
          <Box {...buttonProps}>
            {children}
          </Box>
        </RouterLink>
      </Box>
    );
  }

  return (
    <Box {...buttonProps} onClick={onClick}>
      {children}
    </Box>
  );
}; 