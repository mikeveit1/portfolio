import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useFadeIn } from '../hooks/useFadeIn';
import { FadeInSection } from '../components/FadeInSection';

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
          <Heading 
            size={{ base: "xl", md: "2xl" }}
            color="white"
            fontWeight="600"
            letterSpacing="-0.02em"
          >
            Mike Veit
          </Heading>
        </FadeInSection>
        
        <FadeInSection isVisible={showSubtitle}>
          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            color="gray.300" 
            fontWeight="500"
          >
            Mobile & Web Developer • AI Engineer
          </Text>
        </FadeInSection>
        
        <FadeInSection isVisible={showDescription}>
          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            color="gray.400" 
            maxW="3xl"
            lineHeight="1.6"
            fontWeight="400"
          >
            Versatile and results-driven Software Engineer with hands-on
            experience building and deploying mobile and web applications from
            the ground up. Adept in front-end development, backend architecture,
            AI integration, and cross-platform deployment. Passionate about
            clean, scalable code that delivers real-world value. Experienced in
            leading teams, managing clients, and bringing complex products to
            life.
          </Text>
        </FadeInSection>
        
        <FadeInSection isVisible={showButtons}>
          <Stack 
            direction={{ base: "column", sm: "row" }}
            gap={4}
            w="full"
            justify="center"
            maxW="md"
          >
            <Button
              asChild
              size="lg"
              bg="white"
              color="black"
              _hover={{ bg: "gray.100", transform: "translateY(-1px)" }}
              _active={{ transform: "translateY(0px)" }}
              transition="all 0.2s"
              fontWeight="600"
              px={8}
              h={12}
              borderRadius="full"
              flex={1}
            >
              <RouterLink to="/projects">View Projects</RouterLink>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              borderColor="gray.600"
              color="white"
              _hover={{
                borderColor: "gray.400",
                bg: "gray.900",
                transform: "translateY(-1px)",
              }}
              _active={{ transform: "translateY(0px)" }}
              transition="all 0.2s"
              fontWeight="600"
              px={8}
              h={12}
              borderRadius="full"
              flex={1}
            >
              <a
                href="/Mike_Veit_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </Button>
          </Stack>
        </FadeInSection>
      </VStack>
    </Box>
  );
};

export default Home;
