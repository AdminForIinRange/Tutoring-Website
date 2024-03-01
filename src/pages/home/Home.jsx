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
import EnglishMajor from "../../assets/People/artist-white_1368-3546.png";
import useScreenSize from "../../hook/useScreenSize";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";
import { CiBadgeDollar } from "react-icons/ci";
export default function Home() {
  const { isSmallScreen, isMdScreen} = useScreenSize(); // Custom hook for handling screen size

  return (
    <>
      <VStack>
        <HStack
          align={"start"}
          flexWrap={{
            base: "wrap",
            xsm: "wrap",
            ssm: "wrap",
            sm: "nowrap",
            md: "nowrap",
            lg: "nowrap",
            xl: "nowrap",
            xxl: "nowrap",
            xxxl: "nowrap",
          }}
        >
          <HStack
            w={{
              base: "90%",
              xsm: "90%",
              ssm: "90%",
              sm: "60%",
              md: "50%",
              lg: "50%",
              xl: "50%",
              xxl: "50%",
              xxxl: "50%",
            }}
          >
            <VStack p={"3%"} align={"left"} justify={"left"} gap={"10px"}>
              <Text
              color={"teal"}
                fontWeight={700}
                fontSize={{
                  base: "65px",
                  xsm: "65px",
                  ssm: "65px",
                  sm: "85px",
                  md: "90px",
                  lg: "90px",
                  xl: "90px",
                  xxl: "120px",
                  xxxl: "120px",
                }}
              >
                Unlock Your Potential
              </Text>

              <Text
                    color={"teal.700"}
                fontSize={{
                  base: "12.5px",
                  xsm: "12.5px",
                  ssm: "13.5px",
                  sm: "15.5px",
                  md: "15.5px",
                  lg: "15.5px",
                  xl: "15.5px",
                  xxl: "22.5px",
                  xxxl: "22.5px",
                }}
              >
                Hello!, I'm a fervent self taught Full-Stack Developer
                specializing in{" "}
                <Text as={"span"} textDecoration={"underline"}>
                  frontend
                </Text>
                , with a knack for enhancing web experiences through both UI/UX
                and code.
              </Text>
              <Button w={"120px"} colorScheme="teal">
                Get Started
              </Button>
            </VStack>
          </HStack>

          {isSmallScreen ? (
            <></>
          ) : (
            <HStack w={"50%"} justify={"right"} p={"0% 2% 0% 0%"} align={"end"}>
              <HStack w={"100%"} align={"end"}>
                <Box
                  backgroundImage={EnglishMajor}
                  backgroundSize={"contain"}
                  backgroundRepeat={"no-repeat"}
                  backgroundPosition={"bottom"}
                  w={"100%"}
                  h={"600px"}
                >
                  <HStack justify={"right"}>
                    <Box
                    p={"3%"}
                     bgColor={"teal.100"}
                      mt={{
                        base: "60px",
                        xsm: "60px",
                        ssm: "60px",
                        sm: "40px",
                        md: "40px",
                        lg: "40px",
                        xl: "40px",
                        xxl: "40px",
                        xxxl: "40px",
                      }}
                      boxShadow={"0px 0px 30px teal"}
                      border={"1px solid none"}
                      w={"30%"}
                      h={"10%"}
                      borderRadius={"15px"}
                      
                    > 
                    
                    <VStack w={"100%"} align={"left"} fontFamily={"sans-serif"}>
                    <Text fontWeight={"700"}fontSize={{ base: "20px",
                        xsm: "20px",
                        ssm: "20px",
                        sm: "20px",
                        md: "35px",
                        lg: "35px",
                        xl: "35px",
                        xxl: "35px",
                        xxxl: "35px",}}>
                    Mike 
                  </Text>
                  <Text  mt={"-10px"}  fontWeight={"100"} fontSize={{ base: "13px",
                        xsm: "13px",
                        ssm: "13px",
                        sm: "15px",
                        md: "15px",
                        lg: "17px",
                        xl: "20px",
                        xxl: "20px",
                        xxxl: "20px",}} as={"spam"}>English Major</Text>
                
               
                { isMdScreen ?  <> <VStack w={"100%"} align={"end"}>
        <Button  colorScheme="teal"  h={"20px"} w={"100%"} >
            <Text fontSize={"10px"}>
                More
            </Text>
             
            </Button>
        </VStack> </>: <> 
                
                <Text  fontSize={{ base: "3px",
                        xsm: "10px",
                        ssm: "10px",
                        sm: "9px",
                        md: "9px",
                        lg: "10px",
                        xl: "12px",
                        xxl: "15px",
                        xxxl: "15px",}} fontWeight={"100"} >   <Icon   fontSize={{ base: "3px",
                        xsm: "10px",
                        ssm: "10px",
                        sm: "9px",
                        md: "9px",
                        lg: "10px",
                        xl: "12px",
                        xxl: "15px",
                        xxxl: "15px",}} as={LuBadgeCheck }/> Certfied</Text>
                        
                        <Text  fontSize={{ base: "3px",
                        xsm: "10px",
                        ssm: "10px",
                        sm: "9px",
                        md: "9px",
                        lg: "10px",
                        xl: "12px",
                        xxl: "15px",
                        xxxl: "15px",}}  fontWeight={"100"} >     <Icon  fontSize={{ base: "3px",
                        xsm: "10px",
                        ssm: "10px",
                        sm: "9px",
                        md: "9px",
                        lg: "10px",
                        xl: "12px",
                        xxl: "15px",
                        xxxl: "15px",}} as={FaBriefcase} /> 3 Years of Experience</Text>
                  <Text  fontSize={{ base: "3px",
                        xsm: "10px",
                        ssm: "10px",
                        sm: "9px",
                        md: "9px",
                        lg: "10px",
                        xl: "12px",
                        xxl: "15px",
                        xxxl: "15px",}}fontWeight={"100"} >  <Text   fontSize={{ base: "3px",
                        xsm: "10px",
                        ssm: "10px",
                        sm: "9px",
                        md: "9px",
                        lg: "10px",
                        xl: "12px",
                        xxl: "15px",
                        xxxl: "15px",}} as={"span"} fontWeight={"700"}>$</Text> 78-89/h</Text></>}
                  </VStack>
                  </Box>
                      
                  </HStack>
                </Box>
              </HStack>
            </HStack>
          )}
        </HStack>
        <HStack justify={"end"} w={"90%"} >

        <Divider
       
          border={"5px solid teal"}
          borderRadius={"20PX"}
          mt={{
            base: "10px",
            xsm: "10px",
            ssm: "10px",
            sm: "-10px",
            md: "-10px",
            lg: "-10px",
            xl: "-10px",
            xxl: "-10px",
            xxxl: "-10px",
          }}
        />

        </HStack>
      
      </VStack>
    </>
  );
}
