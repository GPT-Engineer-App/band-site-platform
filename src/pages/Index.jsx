import { Box, Container, Flex, Heading, Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { FaCalendarAlt, FaMusic, FaShoppingCart, FaTshirt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Header />
      <HeroBanner />
      <LatestNewsSection />
      <FeaturedMusic />
      <Footer />
    </Container>
  );
};

const Header = () => {
  return (
    <Flex as="header" bg="teal.500" p={4} justifyContent="space-between" alignItems="center" color="white">
      <Heading as="h1" size="lg">
        BandSite
      </Heading>
      <Stack direction="row" spacing={4}>
        <Text>Home</Text>
        <Text>Tour</Text>
        <Text>Merch</Text>
        <Text>About</Text>
      </Stack>
    </Flex>
  );
};

const HeroBanner = () => {
  return (
    <Flex bg="gray.700" color="white" justifyContent="center" alignItems="center" p={10} direction="column">
      <Heading as="h2" size="2xl">
        Welcome to BandSite
      </Heading>
      <Text mt={4} fontSize="xl">
        Explore the music, tour dates, and merchandise!
      </Text>
    </Flex>
  );
};

const LatestNewsSection = () => {
  return (
    <VStack spacing={4} p={5}>
      <Heading as="h3" size="lg">
        Latest News
      </Heading>
      <Text>New album release coming this fall!</Text>
    </VStack>
  );
};

const FeaturedMusic = () => {
  return (
    <Box p={5}>
      <Heading as="h3" size="lg" mb={4}>
        Featured Tracks
      </Heading>
      <SimpleGrid columns={3} spacing={10}>
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </SimpleGrid>
    </Box>
  );
};

const MusicCard = () => {
  return (
    <VStack bg="gray.100" p={4} borderRadius="md">
      <Image src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyfGVufDB8fHx8MTcxNTM4ODg5OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Album Cover" boxSize="160px" objectFit="cover" />
      <Text mt={2}>Song Title</Text>
      <Text>Album Name</Text>
    </VStack>
  );
};

const Footer = () => {
  return (
    <Flex as="footer" bg="gray.800" color="gray.400" p={4} justifyContent="center">
      <Text>&copy; {new Date().getFullYear()} BandSite. All rights reserved.</Text>
    </Flex>
  );
};

export default Index;
