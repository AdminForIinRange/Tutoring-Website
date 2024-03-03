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
  Progress,
  AvatarGroup,
  Container,
  Spacer,
  Icon,
} from "@chakra-ui/react";
import React from "react";

import { MdOutlineAttachMoney } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";
import { CiBadgeDollar } from "react-icons/ci";
import useScreenSize from "../hook/useScreenSize";


export default function TutorCard({
  Name,
  Role,
  Cert,
  Experience,
  Hourly,
  Img,
  mainColor,
}) {

  const { isSmallScreen, isMdScreen} = useScreenSize();
  return (
    <VStack

      transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
      _hover={{
        transform: "scale(1.03)",
      }}

    >
     {isSmallScreen ? <>





      <Box
        fontFamily={"sans-serif"}
        w={"170px"}
        h={"280px"}
        bgColor={"gray.200"}
        borderRadius={"15px"}
        p={"5%"}
        fontWeight={"500"}
        bgImage={Img}
        backgroundSize={"contain"}
        bgRepeat={"no-repeat"}
        backgroundPosition={"bottom" }
      >
        <Box>
          <Text fontWeight={"700"} fontSize={"20px"} >
            {Name}{" "}
            <Text mt={"100px"} fontWeight={"200"} fontSize={"12px"} as={"spam"}>
              -{Role}
            </Text>
          </Text>
          <Text fontSize={"13px"}>
            {" "}
            <Icon fontSize={"12px"} as={LuBadgeCheck} />{" "}
            {Cert ? "Certfied" : ""}
          </Text>

          <Text fontSize={"13px"}>
            {" "}
            <Icon fontSize={"12px"} as={FaBriefcase} /> {Experience} Years of
            Experience
          </Text>
          <Text fontSize={"13px"}>
            {" "}
            <Text  fontSize={"13px"} as={"span"} fontWeight={"700"}>
              $
            </Text>{" "}
            {Hourly}
          </Text>
        
        </Box>
      </Box>
      <VStack w={"100%"} align={"end"}>
        <Button
          bgColor={"#2B323C"}
          colorScheme={"blackAlpha"}
          color={"white"}
          w={"100%"}
        >
          <Text fontSize={"25px"}>More</Text>
        </Button>
      </VStack>
      



































     
     
     
     
     
     
      </> : 
     <>
   
     <Box
        fontFamily={"sans-serif"}
        w={"325px"}
        h={"450px"}
        bgColor={"gray.200"}
        borderRadius={"15px"}
        p={"4%"}
        fontWeight={"500"}
      >
        <Box>
          <Text fontWeight={"700"} fontSize={"25px"}>
            {Name}{" "}
            <Text fontWeight={"200"} fontSize={"15px"} as={"spam"}>
              -{Role}
            </Text>
          </Text>
          <Text>
            {" "}
            <Icon fontSize={"15px"} as={LuBadgeCheck} />{" "}
            {Cert ? "Certfied" : ""}
          </Text>

          <Text>
            {" "}
            <Icon fontSize={"15px"} as={FaBriefcase} /> {Experience} Years of
            Experience
          </Text>
          <Text>
            {" "}
            <Text as={"span"} fontWeight={"700"}>
              $
            </Text>{" "}
            {Hourly}
          </Text>
          <VStack w={"100%"} h={"100%"} justify={"center"}>
            <Image w={"300px"} h={"328px"} src={Img} />
          </VStack>
        </Box>
      </Box>
      <VStack w={"100%"} align={"end"}>
        <Button
          bgColor={"#2B323C"}
          colorScheme={"blackAlpha"}
          color={"white"}
          w={"100%"}
        >
          <Text fontSize={"25px"}>More</Text>
        </Button>
      </VStack>
      
      </>}
    </VStack>
  );
}
