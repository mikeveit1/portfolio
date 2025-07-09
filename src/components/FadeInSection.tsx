import { Box } from '@chakra-ui/react';
import { type ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  isVisible: boolean;
  delay?: number;
  duration?: string;
  translateY?: string;
}

export const FadeInSection = ({ 
  children, 
  isVisible, 
  delay = 0,
  duration = "0.8s",
  translateY = "30px"
}: FadeInSectionProps) => {
  return (
    <Box
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : `translateY(${translateY})`}
      transition={`all ${duration} ease-out`}
      transitionDelay={`${delay}ms`}
    >
      {children}
    </Box>
  );
};
