import {
  Input,
  HStack,
  InputGroup,
  Highlight,
  Button,
  Text,
  VStack,
  InputRightAddon,
  Box,
  Icon,
} from "@chakra-ui/react";
import Header from "../../Components/Header";
import InputBar from "./Components/InputBar";
import EnglishMajor from "../../assets/People/artist-white_1368-3546.png";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";
import { CiBadgeDollar } from "react-icons/ci";
export default function FindTutor() {
  return (
    <>
      <Header
        MainText={"Find a Tutor"}
        SubText={"Our Highly Acclaimed Top-Rated Tutors of the Month"}
      />

      <InputBar />

      <VStack
        w={"100%"}
        h={"100%"}
        align={"center"}
        justify={"center"}
        mt={"50px"}
      >
        <HStack w={"90%"} h={"100%"} align={"center"} justify={"center"} transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
              _hover={{
                transform: "scale(1.03)",
              
              }}>
            <VStack>
            <Box
              fontFamily={"sans-serif"}
            w={"325px"}
            h={"450px"}
            bgColor={"gray.200"}
            borderRadius={"15px"}
            p={"4%"}
            fontWeight={"500"}
            backgroundImage={EnglishMajor}

            backgroundSize={"300px"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"bottom"}
           
          >
            
            <Text fontWeight={"700"} fontSize={"25px"}>
              Mike <Text fontWeight={"500"} fontSize={"15px"} as={"spam"}>- English Major</Text>
            </Text>
            <Text>   <Icon fontSize={"15px"} as={LuBadgeCheck }/> Certfied</Text>
         
            <Text>     <Icon fontSize={"15px"} as={FaBriefcase} /> 3 Years of Experience</Text>
            <Text  >  <Text as={"span"} fontWeight={"700"}>$</Text> 78-89/h</Text>
            
            
          </Box>
          <VStack w={"100%"} align={"end"}>
        <Button colorScheme="teal" w={"100%"} mb={"100%"}>
            <Text fontSize={"25px"}>
                More
            </Text>
             
            </Button>
        </VStack>
        
            </VStack>
    
        </HStack>
      </VStack>
    </>
  );
}
