import { Box, Flex, Link, Text, Stack, Icon } from '@chakra-ui/react'
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import React from 'react'

export default function Footer() {
  return (
    <Box bgColor="gray.200" py={2} mt={"100px"} borderRadius={
      '15px'
    }>
      <Flex direction={{ base: "column", md: "row" }} justify="space-around" align="center">
        <Stack spacing={4} textAlign="center" mb={{ base: 8, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">Company</Text>
          <Link href="#" fontSize="sm" color="gray.600">About Us</Link>
          <Link href="#" fontSize="sm" color="gray.600">Contact Us</Link>
          <Link href="#" fontSize="sm" color="gray.600">Privacy Policy</Link>
          <Link href="#" fontSize="sm" color="gray.600">Terms of Service</Link>
        </Stack>
        <Stack spacing={4} textAlign="center" mb={{ base: 8, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">Products</Text>
          <Link href="#" fontSize="sm" color="gray.600">Get Started</Link>
          <Link href="#" fontSize="sm" color="gray.600">Become a Tutor</Link>
          <Link href="#" fontSize="sm" color="gray.600">Tutors </Link>
          <Link href="#" fontSize="sm" color="gray.600">Development</Link>
        </Stack>
        <Stack spacing={4} textAlign="center" mb={{ base: 8, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">Connect with Us</Text>
          <Flex justify="center">
            <Link href="#" mr={2}><Icon as={FaTwitter} boxSize={6} color="gray.600" /></Link>
            <Link href="#" mr={2}><Icon as={FaFacebook} boxSize={6} color="gray.600" /></Link>
            <Link href="#" mr={2}><Icon as={FaLinkedin} boxSize={6} color="gray.600" /></Link>
            <Link href="#"><Icon as={FaInstagram} boxSize={6} color="gray.600" /></Link>
          </Flex>
        </Stack>
      </Flex>
      <Text mt={8} textAlign="center" fontSize="sm" color="gray.600">© 2024 Anjesh Bhattarai. Not an Official Site.</Text>
    </Box>
  )
}
