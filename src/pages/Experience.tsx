import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack,
  HStack,
  Badge,
  SimpleGrid,
  Circle
} from '@chakra-ui/react';
import { useFadeIn } from '../hooks/useFadeIn';
import { FadeInSection } from '../components/FadeInSection';
import { RoundedIcon } from '../components/RoundedIcon';

const Experience = () => {
  const [showHeader, showExperience, showSkills, showEducation] = useFadeIn([300, 600, 900, 1200]);

  const experiences = [
    {
      title: "Front-End Engineer (Contract)",
      company: "LainaHealth (formerly IncludeHealth Inc)",
      period: "Jan 2025 - Present",
      description: "Developing responsive React-based telehealth app for physical therapy, improving patient workflows and clinician tools with modern React architecture.",
      achievements: [
        "Built reusable UI components with React hooks and TypeScript",
        "Focused on accessibility and responsive design best practices",
        "Integrated GraphQL queries for real-time clinical data updates",
        "Collaborated with QA and product teams for sprint delivery"
      ]
    },
    {
      title: "Founder & CEO",
      company: "Vemara Solutions",
      period: "Mar 2024 - Jan 2025",
      description: "Ran a boutique dev consultancy delivering custom web and mobile apps for startups and small businesses, managing full project lifecycle from conception to deployment.",
      achievements: [
        "Architected systems using React Native, Firebase, Swift, and Kotlin",
        "Led hiring, client management, and technical delivery",
        "Interfaced directly with clients for scope definition and proposals",
        "Oversaw sprint planning, code reviews, and infrastructure deployment"
      ]
    },
    {
      title: "Mobile Engineer",
      company: "Fiserv",
      period: "May 2022 - Aug 2024",
      description: "Delivered new features for enterprise mobile banking apps on iOS and Android, focusing on security, performance, and user experience improvements.",
      achievements: [
        "Refactored legacy codebases into modular, testable Swift/Kotlin components",
        "Mentored junior engineers and improved team onboarding processes",
        "Integrated biometric auth, analytics SDKs, and push notification systems",
        "Authored technical documentation and development guides"
      ]
    },
    {
      title: "Front-End Engineer",
      company: "IncludeHealth Inc",
      period: "Jan 2021 - May 2022",
      description: "Developed computer-vision-enhanced apps for remote physical therapy using cutting-edge technology stack and modern development practices.",
      achievements: [
        "Built joint-angle detection tools with computer vision integration",
        "Handled full-stack development and DevOps responsibilities",
        "Managed CI/CD pipelines via Azure Pipelines and GitLab",
        "Collaborated with CV engineers to fine-tune pose detection logic"
      ]
    },
    {
      title: "iOS Engineer (Contract)",
      company: "Damikaa Consulting",
      period: "Aug 2020 - Jan 2021",
      description: "Created secure internal media-sharing iOS app with advanced video capture capabilities and cloud integration in fast-paced consulting environment.",
      achievements: [
        "Implemented custom video capture with Dropbox/AWS integration",
        "Built efficient asset upload and preview logic using AVFoundation",
        "Delivered weekly sprints with continuous client feedback integration",
        "Optimized performance with background queues and efficient data handling"
      ]
    }
  ];

  const skills = [
    { 
      category: "Languages", 
      items: ["Swift", "JavaScript", "TypeScript", "Python", "Java", "Kotlin", "Objective-C"] 
    },
    { 
      category: "Frontend", 
      items: ["React", "React Native", "SwiftUI", "GraphQL", "Responsive Design", "Accessibility"] 
    },
    { 
      category: "Backend", 
      items: ["FastAPI", "Firebase", "AWS S3", "Webhook Architecture", "Real-time Data", "JWT"] 
    },
    { 
      category: "Mobile", 
      items: ["iOS Development", "Android Studio", "Xcode", "App Store Connect", "MVVM"] 
    },
    { 
      category: "AI/ML", 
      items: ["OpenAI API", "OpenCV", "Computer Vision", "NLP", "AssemblyAI", "NumPy", "SciPy"] 
    },
    { 
      category: "Tools & DevOps", 
      items: ["Git", "Azure", "CI/CD", "Render", "Stripe", "FFmpeg", "Figma", "JAMF"] 
    }
  ];

  const education = [
    {
      degree: "Bachelor of Arts in Business Administration",
      school: "Rutgers University",
      period: "Expected May 2026",
      status: "In Progress",
      logo: "/rutgers-logo.png",
      logoBg: "white" 
    },
    {
      degree: "Associate of Applied Science in Computer Science",
      school: "DeVry University",
      period: "October 2020",
      status: "Completed",
      logo: "/devry-logo.png",
      logoBg: "yellow"
    }
  ];

  return (
    <Box bg="black" minH="100vh" w="100vw" py={8}>
      <Container maxW="8xl" w="full" px={{ base: 4, md: 8 }}>
        <VStack gap={12} align="stretch" w="full">
          <FadeInSection isVisible={showHeader}>
            <VStack gap={4} textAlign="center" w="full">
              <Heading 
                size={{ base: "xl", md: "2xl" }} 
                color="white"
                fontWeight="600"
                letterSpacing="-0.02em"
              >
                Experience & Skills
              </Heading>
              <Text 
                fontSize={{ base: "lg", md: "xl" }} 
                color="gray.400" 
                maxW="4xl"
                lineHeight="1.6"
              >
                Experienced in leading teams, managing clients, and bringing complex products to life 
                across fintech, healthcare, and consumer applications.
              </Text>
            </VStack>
          </FadeInSection>

          <FadeInSection isVisible={showExperience}>
            <VStack gap={8} align="stretch" w="full">
              <Heading size="xl" color="white" fontWeight="600" letterSpacing="-0.01em">
                Professional Experience
              </Heading>
              <VStack gap={6} w="full">
                {experiences.map((exp, index) => (
                  <Box
                    key={index}
                    borderWidth="1px"
                    borderColor="gray.800"
                    borderRadius="2xl"
                    bg="gray.900"
                    p={8}
                    w="full"
                    transition="all 0.3s ease"
                    _hover={{ 
                      borderColor: 'gray.600',
                      bg: 'gray.800',
                      transform: 'translateY(-2px)'
                    }}
                    position="relative"
                    overflow="hidden"
                  >
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bgGradient="linear(135deg, gray.800 0%, gray.900 100%)"
                      opacity={0.3}
                    />
                    
                    <VStack align="stretch" gap={6} position="relative" zIndex={1}>
                      <VStack align="stretch" gap={3}>
                        <Heading size="lg" color="white" fontWeight="600" letterSpacing="-0.01em">
                          {exp.title}
                        </Heading>
                        <HStack justify="space-between" wrap="wrap">
                          <Text fontWeight="600" color="blue.400" fontSize="lg">
                            {exp.company}
                          </Text>
                          <Badge 
                            bg="gray.700" 
                            color="gray.300" 
                            px={3} 
                            py={1} 
                            borderRadius="full"
                            fontWeight="500"
                          >
                            {exp.period}
                          </Badge>
                        </HStack>
                      </VStack>
                      
                      <Text color="gray.300" lineHeight="1.6" fontSize="md">
                        {exp.description}
                      </Text>
                      
                      <VStack align="stretch" gap={4}>
                        <Text fontWeight="600" color="white" fontSize="md">
                          Key Achievements:
                        </Text>
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <HStack key={achievementIndex} gap={4} align="flex-start">
                            <Circle 
                              size="8px" 
                              bg="blue.400" 
                              mt="8px" 
                              flexShrink={0} 
                            />
                            <Text fontSize="sm" flex={1} color="gray.300" lineHeight="1.6">
                              {achievement}
                            </Text>
                          </HStack>
                        ))}
                      </VStack>
                    </VStack>
                  </Box>
                ))}
              </VStack>
            </VStack>
          </FadeInSection>

          <FadeInSection isVisible={showSkills}>
            <VStack gap={8} align="stretch" w="full">
              <Heading size="xl" color="white" fontWeight="600" letterSpacing="-0.01em">
                Technical Skills
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 6 }} gap={6} w="full">
                {skills.map((skillGroup, index) => (
                  <Box
                    key={index}
                    borderWidth="1px"
                    borderColor="gray.800"
                    borderRadius="xl"
                    bg="gray.900"
                    p={6}
                    w="full"
                    transition="all 0.3s ease"
                    _hover={{ 
                      borderColor: 'gray.600',
                      bg: 'gray.800',
                      transform: 'translateY(-2px)'
                    }}
                  >
                    <VStack align="stretch" gap={4}>
                      <Heading size="sm" color="blue.400" fontWeight="600">
                        {skillGroup.category}
                      </Heading>
                      <VStack align="stretch" gap={2}>
                        {skillGroup.items.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            bg="gray.700" 
                            color="gray.200"
                            fontSize="xs"
                            px={3}
                            py={1}
                            borderRadius="full"
                            fontWeight="500"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </VStack>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </FadeInSection>
          
          <FadeInSection isVisible={showEducation}>
            <VStack gap={8} align="stretch" w="full">
              <Heading size="xl" color="white" fontWeight="600">
                Education
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
                {education.map((edu, index) => (
                  <Box
                    key={index}
                    borderWidth="1px"
                    borderColor="gray.800"
                    borderRadius="xl"
                    bg="gray.900"
                    p={8}
                    w="full"
                    transition="all 0.3s ease"
                    _hover={{ 
                      borderColor: 'gray.600',
                      bg: 'gray.800',
                      transform: 'translateY(-2px)'
                    }}
                  >
                    <VStack align="stretch" gap={4}>
                      <VStack gap={1} align="center"> {/* Reduced from gap={2} to gap={1} */}
                        {edu.logo && (
                          <RoundedIcon
                            src={edu.logo}
                            alt={`${edu.school} logo`}
                            size="50px"
                            backgroundColor={edu.logoBg}
                            mb={2}
                          />
                        )}
                        <Heading 
                          size="md" 
                          color="white" 
                          fontWeight="600" 
                          letterSpacing="-0.01em" 
                          textAlign="center"
                        >
                          {edu.degree}
                        </Heading>
                        <Text fontWeight="600" color="blue.400" fontSize="lg" textAlign="center">
                          {edu.school}
                        </Text>
                      </VStack>
                      <HStack justify="space-between">
                        <Text color="gray.400" fontSize="sm">{edu.period}</Text>
                        <Badge 
                          bg={edu.status === "Completed" ? "green.600" : "blue.600"}
                          color="white"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontWeight="500"
                        >
                          {edu.status}
                        </Badge>
                      </HStack>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </FadeInSection>
        </VStack>
      </Container>
    </Box>
  );
};

export default Experience;
