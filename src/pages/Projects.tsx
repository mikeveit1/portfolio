import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  VStack
} from '@chakra-ui/react';
import { useFadeIn } from '../hooks/useFadeIn';
import { FadeInSection } from '../components/FadeInSection';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [showHeader, showProjects] = useFadeIn([300, 800]);

  const projects = [
    {
      title: "ClipAI - AI Video Editor",
      description: "AI-powered platform that automatically generates tailored short-form clips from long-form video using computer vision, NLP, and advanced video processing pipelines. Achieved 90%+ accuracy with 40.7% faster processing than competitors.",
      link: "https://apps.apple.com/us/app/clipai-ai-video-editor/id6748229814",
      external: true,
      tech: ["React", "React Native", "FastAPI", "OpenCV", "GPT-4", "FFmpeg", "AWS S3", "Firebase"],
      webLink: "https://app.useclip.ai",
      logo: "/clipai-logo.png"
    },
    {
      title: "MacroTrack - Nutrition Tracker",
      description: "Comprehensive nutrition tracking iOS app built with SwiftUI and Firebase, offering real-time data sync, advanced macro calculations, and social-ready sharing tools. Successfully launched to the App Store.",
      link: "https://apps.apple.com/us/app/macrotrack-nutrition-tracker/id6743007561",
      external: true,
      tech: ["SwiftUI", "Firebase", "FatSecret API", "RevenueCat", "MVVM", "Core Data"],
      githubLink: "https://github.com/mikeveit1/macrotrack",
      logo: "/macrotrack-logo.png"
    },
    {
      title: "CaptureNoire - Photo Editor",
      description: "Mobile photography and video editing app optimized for all skin tones, addressing challenges with dark skin representation in photo editing software. Led development as founding engineer, overseeing architectural decisions and team coordination.",
      link: "https://apps.apple.com/us/app/capturenoire-photo-editor/id6739007480",
      external: false,
      tech: ["Swift", "React Native", "TypeScript", "Firebase Auth", "Firebase Database", "Firebase Storage", "iOS", "Cross-platform"],
      logo: "/capturenoire-logo.png"
    },
  ];

  return (
    <Box bg="black" minH="100vh" w="100vw" py={16}>
      <Container maxW="8xl" w="full" px={8}>
        <VStack gap={12} align="stretch" w="full">
          <FadeInSection isVisible={showHeader}>
            <VStack gap={4} textAlign="center" w="full">
              <Heading 
                size={{ base: "xl", md: "2xl" }} 
                color="white"
                fontWeight="600"
                letterSpacing="-0.02em"
              >
                Featured Projects
              </Heading>
              <Text 
                fontSize={{ base: "lg", md: "xl" }} 
                color="gray.400" 
                maxW="4xl"
                lineHeight="1.6"
              >
                A selection of projects showcasing full-stack development, mobile applications, 
                AI integration, and enterprise solutions across healthcare, fintech, and consumer apps.
              </Text>
            </VStack>
          </FadeInSection>

          <FadeInSection isVisible={showProjects}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} w="full" alignItems="stretch">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </SimpleGrid>
          </FadeInSection>
        </VStack>
      </Container>
    </Box>
  );
};

export default Projects;
