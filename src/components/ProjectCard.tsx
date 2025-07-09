import {
  Box,
  Heading,
  Text,
  VStack,
  Badge,
  Stack,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { RoundedIcon } from './RoundedIcon';
import { ActionButton } from './ActionButton';

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  external?: boolean;
  tech?: string[];
  githubLink?: string;
  webLink?: string;
  logo?: string;
  logoBg?: string;
};

const ProjectCard = ({ title, description, link, external, tech = [], githubLink, webLink, logo }: ProjectCardProps) => {
  return (
    <Box
      borderWidth="1px"
      borderColor="gray.800"
      borderRadius="2xl"
      bg="gray.900"
      p={8}
      transition="all 0.3s ease"
      _hover={{ 
        transform: 'translateY(-4px)', 
        borderColor: 'gray.600',
        bg: 'gray.800'
      }}
      cursor="pointer"
      position="relative"
      overflow="hidden"
      h="full"
      display="flex"
      flexDirection="column"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(135deg, gray.800 0%, gray.900 100%)"
        opacity={0.5}
      />
      
      <VStack 
        align="center" 
        justify="space-between" 
        gap={6} 
        position="relative" 
        zIndex={1}
        h="full"
        textAlign="center"
      >
        <VStack gap={4} align="center">
          <VStack gap={3} align="center">
            {logo && (
              <RoundedIcon
                src={logo}
                alt={`${title} logo`}
                size="60px"
              />
            )}
            <Heading size="lg" color="white" fontWeight="600" letterSpacing="-0.01em">
              {title}
            </Heading>
          </VStack>
          
          <Text color="gray.300" lineHeight="1.6" fontSize="md">
            {description}
          </Text>
          
          {tech.length > 0 && (
            <Stack direction="row" wrap="wrap" gap={2} justify="center">
              {tech.map((item: string) => (
                <Badge 
                  key={item} 
                  bg="gray.700" 
                  color="gray.200"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="xs"
                  fontWeight="500"
                >
                  {item}
                </Badge>
              ))}
            </Stack>
          )}
        </VStack>

        <Box w="full">
          {webLink ? (
            <VStack gap={3} w="full">
              <Stack direction={{ base: "column", sm: "row" }} gap={3} w="full">
                <ActionButton
                  variant="primary"
                  href={webLink}
                  external
                  flex={1}
                >
                  View Web App →
                </ActionButton>
                
                <ActionButton
                  variant="secondary"
                  href={link}
                  external
                  flex={1}
                >
                  View Mobile App →
                </ActionButton>
              </Stack>
            </VStack>
          ) : githubLink ? (
            <Stack direction={{ base: "column", sm: "row" }} gap={3} w="full">
              <ActionButton
                variant="primary"
                href={external ? link : undefined}
                to={!external ? link : undefined}
                external={external}
                flex={1}
              >
                View Mobile App →
              </ActionButton>
              
              <ActionButton
                variant="secondary"
                href={githubLink}
                external
                minW="100px"
              >
                <FaGithub size={16} />
                View GitHub →
              </ActionButton>
            </Stack>
          ) : (
            <ActionButton
              variant="primary"
              href={external ? link : undefined}
              to={!external ? link : undefined}
              external={external}
            >
              View Mobile App →
            </ActionButton>
          )}
        </Box>
      </VStack>
    </Box>
  );
};

export default ProjectCard;
  