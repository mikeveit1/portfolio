import {
  Box,
  VStack,
  Stack,
  Image,
  HStack,
  Text, // Add this back for the button text
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';
import { useFadeIn } from '../hooks/useFadeIn';
import { FadeInSection } from '../components/FadeInSection';
import { Button } from '../components/Button';
import { HeroHeading, Subtitle, BodyLarge } from '../components/Text';

const Home = () => {
  const [showPhoto, showName, showSubtitle, showDescription, showButtons] = useFadeIn([500, 700, 1200, 1800, 2000]);

  return (
    <Box 
      minH="100vh" 
      w="100vw" 
      display="flex" 
      alignItems="flex-start"
      justifyContent="center" 
      bg="black" 
      px={6}
      py={8}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="radial(circle at 50% 50%, gray.900 0%, black 70%)"
        opacity={0.6}
      />
      
      <VStack gap={8} textAlign="center" maxW="4xl" w="full" zIndex={1}>
        <FadeInSection isVisible={showPhoto}>
          <Image
            src="/mike-veit-headshot.jpg"
            alt="Mike Veit"
            w="120px"
            h="120px"
            objectFit="cover"
            borderRadius="full"
            boxShadow="0 8px 24px rgba(0, 0, 0, 0.4)"
          />
        </FadeInSection>
        
        <FadeInSection isVisible={showName}>
          <HeroHeading>
            Mike Veit
          </HeroHeading>
        </FadeInSection>
        
        <FadeInSection isVisible={showSubtitle}>
          <Subtitle>
            Mobile & Web Developer • AI Engineer
          </Subtitle>
        </FadeInSection>
        
        <FadeInSection isVisible={showDescription}>
          <BodyLarge maxW="3xl" fontWeight="400">
            Versatile and results-driven Software Engineer with hands-on
            experience building and deploying mobile and web applications from
            the ground up. Adept in front-end development, backend architecture,
            AI integration, and cross-platform deployment. Passionate about
            clean, scalable code that delivers real-world value. Experienced in
            leading teams, managing clients, and bringing complex products to
            life.
          </BodyLarge>
        </FadeInSection>
        
        <FadeInSection isVisible={showButtons}>
          <VStack gap={4} w="full" maxW="md">
            <Stack 
              direction={{ base: "column", sm: "row" }}
              gap={4}
              w="full"
              justify="center"
            >
              <Button
                asChild
                variant="primary"
                flex={1}
              >
                <RouterLink to="/projects">View Projects</RouterLink>
              </Button>
              <Button
                asChild
                variant="secondary"
                flex={1}
              >
                <a href="/Mike_Veit_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </Stack>
            
            <Button
              asChild
              variant="secondary"
              w="full"
            >
              <a href="https://github.com/mikeveit1/portfolio" target="_blank" rel="noopener noreferrer">
                <HStack gap={2}>
                  <FaGithub size={18} />
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    <Box as="span" display={{ base: "none", sm: "inline" }}>
                      View this site on GitHub
                    </Box>
                    <Box as="span" display={{ base: "inline", sm: "none" }}>
                      View on GitHub
                    </Box>
                  </Text>
                  <Text>→</Text>
                </HStack>
              </a>
            </Button>
          </VStack>
        </FadeInSection>
      </VStack>
    </Box>
  );
};

export default Home;
