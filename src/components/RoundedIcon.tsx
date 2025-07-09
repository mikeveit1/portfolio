import { Image, Box } from '@chakra-ui/react';

interface RoundedIconProps {
  src: string;
  alt: string;
  size?: string;
  borderRadius?: string;
  backgroundColor?: string;
  padding?: string;
  mb?: string | number;
}

export const RoundedIcon = ({ 
  src, 
  alt, 
  size = "60px", 
  borderRadius = "xl",
  backgroundColor,
  padding = "0",
  mb
}: RoundedIconProps) => {
  if (backgroundColor) {
    return (
      <Box
        w={size}
        h={size}
        bg={backgroundColor}
        borderRadius={borderRadius}
        boxShadow="0 4px 12px rgba(0, 0, 0, 0.3)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={padding}
        overflow="hidden"
        mb={mb}
      >
        <Image
          src={src}
          alt={alt}
          w="full"
          h="full"
          objectFit="contain"
        />
      </Box>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      w={size}
      h={size}
      objectFit="cover"
      borderRadius={borderRadius}
      boxShadow="0 4px 12px rgba(0, 0, 0, 0.3)"
      mb={mb}
    />
  );
};
