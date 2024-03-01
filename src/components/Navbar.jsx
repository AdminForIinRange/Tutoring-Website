import React, { useEffect, useState } from "react";
import {
  Step,
  StepDescription,
  Input,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  HStack,
  Heading,
  InputGroup,
  Card,
  CardHeader,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  CardBody,
  Highlight,
  CardFooter,
  Divider,
  AspectRatio,
  ButtonGroup,
  Center,
  Flex,
  Button,
  Text,
  Stack,
  Box,
  useBreakpointValue,
  Menu,
  MenuButton,
  VStack,
  MenuList,
  MenuItem,
  Wrap,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Grid,
  GridItem,
  Image,
  InputLeftAddon,
  InputRightAddon,
  useSteps,
  AbsoluteCenter,
  Avatar,
  AvatarBadge,
  useToast,
  WrapItem,
  AvatarGroup,
  Container,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box p={"15px"} >
      <VStack justify={"center"} align={"center"}>
        <Box w={"100%"}>
          <HStack justify={"center"} h={"100%"} align={"Start"}>
            <HStack w={"90%"} justify={"center"} gap={"3%"}>
              

              <>
              
                <ButtonGroup colorScheme="none" variant="link" >
                  <HStack gap={"30px"}>
                    <Button
                      fontSize={{
                        base: "8.5px",
                        xsm: "8.5px",
                        ssm: "12.5px",
                        sm: "12.5px",
                        md: "12.5px",
                        lg: "12.5px",
                        xl: "15.5px",
                        xxl: "17.5px",
                        xxxl: "17.5px",
                      }}
                    >
                      <a href="#HowitWorks">How it Works</a>
                    </Button>

                    <Button
                      fontSize={{
                        base: "8.5px",
                        xsm: "8.5px",
                        ssm: "12.5px",
                        sm: "12.5px",
                        md: "12.5px",
                        lg: "12.5px",
                        xl: "15.5px",
                        xxl: "17.5px",
                        xxxl: "17.5px",
                      }}
                    >
                      {" "}
                      <a href="#GetStarted">Get Started</a>
                    </Button>
                    <Button
                      fontSize={{
                        base: "8.5px",
                        xsm: "8.5px",
                        ssm: "12.5px",
                        sm: "12.5px",
                        md: "12.5px",
                        lg: "12.5px",
                        xl: "15.5px",
                        xxl: "17.5px",
                        xxxl: "17.5px",
                      }}
                    >
                      <a href="#BecomeAtutor">Become a tutor</a>
                    </Button>
                    <Button
                      fontSize={{
                        base: "8.5px",
                        xsm: "8.5px",
                        ssm: "12.5px",
                        sm: "12.5px",
                        md: "12.5px",
                        lg: "12.5px",
                        xl: "15.5px",
                        xxl: "17.5px",
                        xxxl: "17.5px",
                      }}
                    >
                      <a href="#FAQ">FAQ</a>
                    </Button>
                  </HStack>
                </ButtonGroup>
              </>
              <Spacer />
              <Text
                fontWeight={500}
              
                fontSize={{
                  base: "8.5px",
                  xsm: "8.5px",
                  ssm: "12.5px",
                  sm: "12.5px",
                  md: "12.5px",
                  lg: "12.5px",
                  xl: "15.5px",
                  xxl: "17.5px",
                  xxxl: "17.5px",
                }}
              >
                login
              </Text>
              <Text
                fontWeight={500}
              
                fontSize={{
                  base: "8.5px",
                  xsm: "8.5px",
                  ssm: "12.5px",
                  sm: "12.5px",
                  md: "12.5px",
                  lg: "12.5px",
                  xl: "15.5px",
                  xxl: "17.5px",
                  xxxl: "17.5px",
                }}
              >
                Sigin Up
              </Text>
            </HStack>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}
