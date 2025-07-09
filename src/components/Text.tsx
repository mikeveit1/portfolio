import { Heading, Text } from '@chakra-ui/react';
import { type ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  [key: string]: any;
}

export const HeroHeading = ({ children, ...props }: TextProps) => (
  <Heading 
    size={{ base: 'xl', md: '2xl' }}
    fontWeight={600}
    letterSpacing="-0.02em"
    color="white"
    {...props}
  >
    {children}
  </Heading>
);

export const SectionHeading = ({ children, ...props }: TextProps) => (
  <Heading 
    size="xl"
    fontWeight={600}
    letterSpacing="-0.01em"
    color="white"
    {...props}
  >
    {children}
  </Heading>
);

export const BodyLarge = ({ children, ...props }: TextProps) => (
  <Text 
    fontSize={{ base: 'lg', md: 'xl' }}
    lineHeight={1.6}
    color="gray.400"
    {...props}
  >
    {children}
  </Text>
);

export const Subtitle = ({ children, ...props }: TextProps) => (
  <Text 
    fontSize={{ base: 'lg', md: 'xl' }}
    fontWeight={500}
    color="gray.300"
    {...props}
  >
    {children}
  </Text>
);

export const CardHeading = ({ children, ...props }: TextProps) => (
  <Heading 
    size="lg"
    fontWeight="600"
    letterSpacing="-0.01em"
    color="white"
    {...props}
  >
    {children}
  </Heading>
);

export const MediumHeading = ({ children, ...props }: TextProps) => (
  <Heading 
    size="md"
    fontWeight="600"
    letterSpacing="-0.01em"
    color="white"
    {...props}
  >
    {children}
  </Heading>
);

export const SmallHeading = ({ children, ...props }: TextProps) => (
  <Heading 
    size="sm"
    fontWeight="600"
    color="blue.400"
    {...props}
  >
    {children}
  </Heading>
);

export const CompanyName = ({ children, ...props }: TextProps) => (
  <Text 
    fontSize="lg"
    fontWeight="600"
    color="blue.400"
    {...props}
  >
    {children}
  </Text>
);

export const BodyMedium = ({ children, ...props }: TextProps) => (
  <Text 
    fontSize="md"
    lineHeight="1.6"
    color="gray.300"
    {...props}
  >
    {children}
  </Text>
);

export const BodySmall = ({ children, ...props }: TextProps) => (
  <Text 
    fontSize="sm"
    lineHeight="1.6"
    color="gray.300"
    {...props}
  >
    {children}
  </Text>
);

export const MetaText = ({ children, ...props }: TextProps) => (
  <Text 
    fontSize="sm"
    color="gray.400"
    {...props}
  >
    {children}
  </Text>
);

export const FormLabel = ({ children, ...props }: TextProps) => (
  <Text 
    mb={3}
    fontWeight="600"
    color="white"
    fontSize="sm"
    {...props}
  >
    {children}
  </Text>
); 