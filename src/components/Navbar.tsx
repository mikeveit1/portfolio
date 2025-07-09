import {
    Box,
    Flex,
    HStack,
    IconButton,
    Stack,
    Button,
    useDisclosure,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import { HiMenu, HiX } from 'react-icons/hi';
  import { Link as RouterLink, useLocation } from 'react-router-dom';
  
  const links = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Experience', to: '/experience' },
    { label: 'Contact', to: '/contact' },
  ];
  
  const Navbar = () => {
    const { open, onOpen, onClose } = useDisclosure();
    const location = useLocation();
    const isMobile = useBreakpointValue({ base: true, md: false });

    const NavButton = ({ to, label }: { to: string; label: string }) => (
      <Button
        asChild
        variant="ghost"
        size="md"
        color={location.pathname === to ? 'white' : 'gray.400'}
        bg={location.pathname === to ? 'gray.800' : 'transparent'}
        _hover={{ 
          color: 'white', 
          bg: location.pathname === to ? 'gray.700' : 'gray.900',
        }}
        fontWeight="500"
        px={4}
        h={10}
        borderRadius="lg"
        transition="all 0.2s"
        w={{ base: "full", md: "auto" }}
        textAlign={{ base: "left", md: "center" }}
      >
        <RouterLink to={to} onClick={onClose}>{label}</RouterLink>
      </Button>
    );

    return (
      <Box 
        bg="rgba(0, 0, 0, 0.8)" 
        backdropFilter="blur(20px)"
        borderBottom="1px solid" 
        borderColor="gray.800" 
        px={6} 
        py={3} 
        position="sticky" 
        top={0} 
        zIndex={100}
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box fontWeight="600" fontSize="xl" color="white">
            Mike Veit
          </Box>
          <HStack gap={2} display={{ base: 'none', md: 'flex' }}>
            {links.map(({ label, to }) => (
              <NavButton key={to} label={label} to={to} />
            ))}
          </HStack>
          <IconButton
            aria-label="Toggle menu"
            display={{ md: 'none' }}
            onClick={open ? onClose : onOpen}
            variant="ghost"
            color="white"
            _hover={{ bg: 'gray.800' }}
            borderRadius="lg"
          >
            {open ? <HiX size={20} /> : <HiMenu size={20} />}
          </IconButton>
        </Flex>

        {open && isMobile && (
          <Stack 
            mt={4} 
            gap={1}
            display={{ md: 'none' }}
            bg="gray.900"
            p={4}
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.800"
            align="stretch"
          >
            {links.map(({ label, to }) => (
              <NavButton key={to} label={label} to={to} />
            ))}
          </Stack>
        )}
      </Box>
    );
  };
  
  export default Navbar;
  