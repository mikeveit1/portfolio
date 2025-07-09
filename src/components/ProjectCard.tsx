import {
  Box,
  Heading,
  Text,
  VStack,
  Badge,
  Stack,
  HStack,
  Image,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

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
              <Image
                src={logo}
                alt={`${title} logo`}
                w="60px"
                h="60px"
                objectFit="cover"
                borderRadius="xl"
                boxShadow="0 4px 12px rgba(0, 0, 0, 0.3)"
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
              <HStack gap={3} w="full">
                <Box asChild flex={1}>
                  <a href={webLink} target="_blank" rel="noopener noreferrer">
                    <Box
                      as="button"
                      bg="white"
                      color="black"
                      px={6}
                      py={3}
                      borderRadius="full"
                      fontWeight="600"
                      fontSize="sm"
                      _hover={{ bg: 'gray.100', transform: 'translateY(-1px)' }}
                      _active={{ transform: 'translateY(0px)' }}
                      transition="all 0.2s"
                      w="full"
                    >
                      View Web App →
                    </Box>
                  </a>
                </Box>
                
                <Box asChild flex={1}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <Box
                      as="button"
                      bg="transparent"
                      color="white"
                      border="1px solid"
                      borderColor="gray.600"
                      px={6}
                      py={3}
                      borderRadius="full"
                      fontWeight="600"
                      fontSize="sm"
                      _hover={{ borderColor: 'gray.400', transform: 'translateY(-1px)' }}
                      _active={{ transform: 'translateY(0px)' }}
                      transition="all 0.2s"
                      w="full"
                    >
                      View Mobile App →
                    </Box>
                  </a>
                </Box>
              </HStack>
            </VStack>
          ) : githubLink ? (
            <HStack gap={3} w="full">
              {external ? (
                <Box asChild flex={1}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <Box
                      as="button"
                      bg="white"
                      color="black"
                      px={6}
                      py={3}
                      borderRadius="full"
                      fontWeight="600"
                      fontSize="sm"
                      _hover={{ bg: 'gray.100', transform: 'translateY(-1px)' }}
                      _active={{ transform: 'translateY(0px)' }}
                      transition="all 0.2s"
                      w="full"
                    >
                      View Mobile App →
                    </Box>
                  </a>
                </Box>
              ) : (
                <RouterLink to={link} style={{ flex: 1 }}>
                  <Box
                    as="button"
                    bg="white"
                    color="black"
                    px={6}
                    py={3}
                    borderRadius="full"
                    fontWeight="600"
                    fontSize="sm"
                    _hover={{ bg: 'gray.100', transform: 'translateY(-1px)' }}
                    _active={{ transform: 'translateY(0px)' }}
                    transition="all 0.2s"
                    w="full"
                  >
                    View Mobile App →
                  </Box>
                </RouterLink>
              )}
              
              <Box asChild>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <Box
                    as="button"
                    bg="transparent"
                    color="white"
                    border="1px solid"
                    borderColor="gray.600"
                    px={6}
                    py={3}
                    borderRadius="full"
                    fontWeight="600"
                    fontSize="sm"
                    _hover={{ borderColor: 'gray.400', transform: 'translateY(-1px)' }}
                    _active={{ transform: 'translateY(0px)' }}
                    transition="all 0.2s"
                    minW="100px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={2}
                  >
                    <FaGithub size={16} />
                    GitHub →
                  </Box>
                </a>
              </Box>
            </HStack>
          ) : (
            external ? (
              <Box asChild>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Box
                    as="button"
                    bg="white"
                    color="black"
                    px={6}
                    py={3}
                    borderRadius="full"
                    fontWeight="600"
                    fontSize="sm"
                    _hover={{ bg: 'gray.100', transform: 'translateY(-1px)' }}
                    _active={{ transform: 'translateY(0px)' }}
                    transition="all 0.2s"
                    w="full"
                  >
                    View Mobile App →
                  </Box>
                </a>
              </Box>
            ) : (
              <RouterLink to={link}>
                <Box
                  as="button"
                  bg="white"
                  color="black"
                  px={6}
                  py={3}
                  borderRadius="full"
                  fontWeight="600"
                  fontSize="sm"
                  _hover={{ bg: 'gray.100', transform: 'translateY(-1px)' }}
                  _active={{ transform: 'translateY(0px)' }}
                  transition="all 0.2s"
                  w="full"
                >
                  View Mobile App →
                </Box>
              </RouterLink>
            )
          )}
        </Box>
      </VStack>
    </Box>
  );
};

export default ProjectCard;
  