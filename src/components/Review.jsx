import React, { useState, useRef } from 'react';
import {
  Avatar,
  Box,
  Divider,
  Heading,
  Text,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'; // Import icons for scroll buttons
import ReviewsData from "../../data/data"; // Assuming Reviews data is exported from Reviews.js
import Header from './Header';

export default function Review() {
  const [reviews, setReviews] = useState(ReviewsData);
  const reviewContainerRef = useRef(null);

  const scrollRight = () => {
    if (reviewContainerRef.current) {
      reviewContainerRef.current.scrollBy({
        left: 300, // Adjust scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollLeft = () => {
    if (reviewContainerRef.current) {
      reviewContainerRef.current.scrollBy({
        left: -300, // Adjust scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  return (
    <>

<Header 
MainText={"Review"}
SubText={"Trusted within the community :)"}/>
    <HStack justify="center" mt="100px">
        

        
      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="Scroll left"
        onClick={scrollLeft}
        variant="ghost"
        size="lg"
      />
      <HStack 
        w="90%"
        overflowX="auto"
        borderRadius="15px"
        ref={reviewContainerRef}
      >
        {reviews.map((review) => (
          <div key={review.fullName}>
            <Box
              border="1px"
              borderColor="gray.200"
              borderRadius="lg"
              p={4}
              minW="400px"
              minH="200px"
              w="px"
            >
              <HStack mb="4%">
                <Avatar
                  src={review.profilePicture}
                  mr="10px"
                />
                <Heading fontSize={{ base: "16px", xsm: "16px", ssm: "16px" }}>
                  {review.fullName}
                  <Text whiteSpace="normal" as="span" fontWeight="light">
                    - {review.ServiceHeader}
                  </Text>
                </Heading>
              </HStack>

              <center>
                <Divider />
              </center>
              <Text
                whiteSpace="normal"
                textDecoration="w"
                mt="3"
                mb="3"
                fontSize={{
                  base: "12px",
                  xsm: "12px",
                  ssm: "12px",
                  sm: "16px",
                  md: "16px",
                  lg: "16px",
                  xl: "16px",
                  xxl: "16px",
                  xxxl: "16px",
                }}
              >
                {review.templateReview}
              </Text>
            </Box>
          </div>
        ))}
      </HStack>
      <IconButton
        icon={<ChevronRightIcon />}
        aria-label="Scroll right"
        onClick={scrollRight}
        variant="ghost"
        size="lg"
      />
    </HStack>
    </>
  );
}
