import React from 'react'
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
  import NineNews from "../../../assets/Logos/channels4_profile.jpg"
  import ABCnews from "../../../assets/Logos/ABC_News_logo_2021.svg.png"
  import SevenNews from "../../../assets/Logos/7NEWS_Logo_RED_RGB.png"
  import TenNews from "../../../assets/Logos/Network_10_logo_2018.svg.png"
  import SBS  from "../../../assets/Logos/SBS_Australia_Logo_(2019).svg"


export default function EndorsementBanner() {
  return (
    <> <VStack bgColor={"RGBA(0, 0, 0, 0.08)"}  p={"1% 2% 2% 2%"} mt={"10px"} w={"100%"} h={"100%"} justify={"center"} align={"center"} >
 <Text  mb={"10px"}  fontWeight={"300"}   fontSize={{ base: "30px",
          xsm: "30px",
          ssm: "40px",
          sm: "40px",
          md: "50px",
          lg: "50px",
          xl: "50px",
          xxl: "60px",
          xxxl: "60px",}}>Endorsements</Text>



     <HStack gap={"7%"} w={"100%"} justify={"center"} flexWrap={"wrap"}> 
      <Image src={NineNews} w={"6%"} borderRadius={"15px"}  minW={"80px"}/>
      <Image src={ABCnews} w={"15%"}   minW={"130px"} />

      <Image src={SevenNews} w={"15%"}  minW={"130px"}  />

      <Image src={TenNews} w={"6%"}   minW={"80px"} />


      <Image src={SBS} w={"10%"} minW={"100px"}/>

      
     </HStack>




    </VStack>
    
    </>
  )
}
