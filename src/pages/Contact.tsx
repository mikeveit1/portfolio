import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack,
  HStack,
  SimpleGrid,
  Button,
  Input,
  Textarea
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: "Email",
      value: "mikeveit1@gmail.com",
      link: "mailto:mikeveit1@gmail.com",
      description: "Best way to reach me for project inquiries",
      icon: "✉️"
    },
    {
      title: "Phone",
      value: "732-425-9446",
      link: "tel:732-425-9446",
      description: "Available for calls during business hours",
      icon: "📱"
    },
    {
      title: "GitHub",
      value: "github.com/mikeveit1",
      link: "https://github.com/mikeveit1",
      description: "Open source projects and code samples",
      icon: "github"
    },
    {
      title: "Location",
      value: "Morganville, NJ 07751",
      link: "#",
      description: "Available for work in NYC Metro Area",
      icon: "📍"
    },
  ];

  return (
    <Box bg="black" minH="100vh" w="100vw" py={16}>
      <Container maxW="8xl" w="full" px={8}>
        <VStack gap={12} align="stretch" w="full">
          <VStack gap={4} textAlign="center" w="full">
            <Heading 
              size={{ base: "xl", md: "2xl" }} 
              color="white"
              fontWeight="600"
              letterSpacing="-0.02em"
            >
              Let's Work Together
            </Heading>
            <Text 
              fontSize={{ base: "lg", md: "xl" }} 
              color="gray.400" 
              maxW="4xl"
              lineHeight="1.6"
            >
              Available for new opportunities, consulting projects, and collaborations. 
              Experienced in mobile development, web applications, AI integration, and leading technical teams.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8} w="full">
            {/* Contact Form */}
            <Box
              borderWidth="1px"
              borderColor="gray.800"
              borderRadius="2xl"
              bg="gray.900"
              p={8}
              w="full"
              transition="all 0.3s ease"
              _hover={{ 
                borderColor: 'gray.600',
                bg: 'gray.800'
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
              
              <VStack gap={8} align="stretch" position="relative" zIndex={1}>
                <Heading size="lg" color="white" fontWeight="600" letterSpacing="-0.01em">
                  Send me a message
                </Heading>
                
                <form onSubmit={handleSubmit}>
                  <VStack gap={6} align="stretch">
                    <Box>
                      <Text mb={3} fontWeight="600" color="white" fontSize="sm">
                        Name
                      </Text>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        bg="gray.800"
                        border="1px solid"
                        borderColor="gray.700"
                        color="white"
                        _placeholder={{ color: 'gray.500' }}
                        _hover={{ borderColor: 'gray.600' }}
                        _focus={{ borderColor: 'blue.400', boxShadow: '0 0 0 1px #60a5fa' }}
                        borderRadius="xl"
                        h={12}
                        fontSize="md"
                      />
                    </Box>

                    <Box>
                      <Text mb={3} fontWeight="600" color="white" fontSize="sm">
                        Email
                      </Text>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        bg="gray.800"
                        border="1px solid"
                        borderColor="gray.700"
                        color="white"
                        _placeholder={{ color: 'gray.500' }}
                        _hover={{ borderColor: 'gray.600' }}
                        _focus={{ borderColor: 'blue.400', boxShadow: '0 0 0 1px #60a5fa' }}
                        borderRadius="xl"
                        h={12}
                        fontSize="md"
                      />
                    </Box>

                    <Box>
                      <Text mb={3} fontWeight="600" color="white" fontSize="sm">
                        Message
                      </Text>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, timeline, and any specific requirements..."
                        rows={5}
                        required
                        bg="gray.800"
                        border="1px solid"
                        borderColor="gray.700"
                        color="white"
                        _placeholder={{ color: 'gray.500' }}
                        _hover={{ borderColor: 'gray.600' }}
                        _focus={{ borderColor: 'blue.400', boxShadow: '0 0 0 1px #60a5fa' }}
                        borderRadius="xl"
                        fontSize="md"
                        resize="vertical"
                      />
                    </Box>

                    {submitStatus === 'success' && (
                      <Text color="green.400" fontSize="sm" textAlign="center">
                        Message sent successfully! I'll get back to you soon.
                      </Text>
                    )}
                    
                    {submitStatus === 'error' && (
                      <Text color="red.400" fontSize="sm" textAlign="center">
                        Failed to send message. Please try again or email me directly.
                      </Text>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      bg="white"
                      color="black"
                      _hover={{ bg: 'gray.100', transform: 'translateY(-1px)' }}
                      _active={{ transform: 'translateY(0px)' }}
                      transition="all 0.2s"
                      fontWeight="600"
                      h={12}
                      borderRadius="xl"
                      width="full"
                      loading={isSubmitting}
                      loadingText="Sending..."
                    >
                      Send Message
                    </Button>
                  </VStack>
                </form>
              </VStack>
            </Box>

            {/* Contact Information */}
            <VStack gap={6} align="stretch" w="full">
              <Heading size="lg" color="white" fontWeight="600" letterSpacing="-0.01em">
                Get in touch
              </Heading>
              
              <VStack gap={4} align="stretch">
                {contactInfo.map((contact, index) => (
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
                    cursor={contact.link !== "#" ? "pointer" : "default"}
                  >
                    {contact.link !== "#" ? (
                      <Box asChild>
                        <a href={contact.link} target="_blank" rel="noopener noreferrer">
                          <VStack align="start" gap={3}>
                            <HStack justify="space-between" w="full">
                              <HStack gap={3}>
                                {contact.icon === "github" ? (
                                  <FaGithub size={20} color="white" />
                                ) : (
                                  <Text fontSize="lg">{contact.icon}</Text>
                                )}
                                <Text fontWeight="600" color="white">{contact.title}</Text>
                              </HStack>
                              <Text color="blue.400" fontSize="sm">→</Text>
                            </HStack>
                            <Text color="gray.300" fontSize="sm" fontWeight="500">
                              {contact.value}
                            </Text>
                            <Text color="gray.500" fontSize="xs">
                              {contact.description}
                            </Text>
                          </VStack>
                        </a>
                      </Box>
                    ) : (
                      <VStack align="start" gap={3}>
                        <HStack gap={3}>
                          <Text fontSize="lg">{contact.icon}</Text>
                          <Text fontWeight="600" color="white">{contact.title}</Text>
                        </HStack>
                        <Text color="gray.300" fontSize="sm" fontWeight="500">
                          {contact.value}
                        </Text>
                        <Text color="gray.500" fontSize="xs">
                          {contact.description}
                        </Text>
                      </VStack>
                    )}
                  </Box>
                ))}
              </VStack>

              <Box
                borderWidth="1px"
                borderColor="gray.800"
                borderRadius="xl"
                bg="gray.900"
                p={8}
                w="full"
                transition="all 0.3s ease"
                _hover={{ 
                  borderColor: 'gray.600',
                  bg: 'gray.800'
                }}
              >
                <VStack gap={6} align="start">
                  <Heading size="md" color="white" fontWeight="600" letterSpacing="-0.01em">
                    Currently Available
                  </Heading>
                  <Text color="gray.300" lineHeight="1.6">
                    Open to full-time opportunities, contract work, and consulting projects. 
                    Particularly interested in mobile development, AI integration, fintech solutions, 
                    and healthcare technology applications.
                  </Text>
                  <VStack align="start" gap={3}>
                    <HStack>
                      <Box w="6px" h="6px" bg="green.400" borderRadius="full" />
                      <Text fontSize="sm" color="gray.300">Available for new projects</Text>
                    </HStack>
                    <HStack>
                      <Box w="6px" h="6px" bg="blue.400" borderRadius="full" />
                      <Text fontSize="sm" color="gray.300">Open to remote work</Text>
                    </HStack>
                    <HStack>
                      <Box w="6px" h="6px" bg="purple.400" borderRadius="full" />
                      <Text fontSize="sm" color="gray.300">New Jersey based</Text>
                    </HStack>
                  </VStack>
                </VStack>
              </Box>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
