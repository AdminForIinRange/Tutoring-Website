import {
  Input,
  HStack,
  InputGroup,
  Highlight,
  Button,
  Text,
  VStack,
  AbsoluteCenter,
  InputRightAddon,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Icon,
} from "@chakra-ui/react";
import Header from "./Header";
import useScreenSize from "../hook/useScreenSize";

export default function FAQ() {
    const { isSmallScreen, isMdScreen} = useScreenSize();
  const questions = [
    "What subjects and ages does Tutor House cover?",
    "How do I sign up for Tutor House?",
    "What is the pricing model for Tutor House?",
    "How can I contact customer support?",
    "Can I schedule sessions with specific tutors?",
    "How do I cancel my subscription?",
    "Is there a free trial period for Tutor House?",
    "What are the qualifications of the tutors?",
    "Can I get a refund if I'm not satisfied?",
    "How do I change my account settings?",
    "Are there group tutoring sessions available?",
    "How secure is my payment information?",
  ];

  return (
    <>
      <Header MainText={"FAQ"} SubText={"Support"} />

      <HStack mt={"100px"} justify={"center"} w={"100%"} flexWrap={"wrap"}>
       { isSmallScreen ? <>



        <Accordion  justifyContent={"center"} w={"100%"} mt={"-80px"} defaultIndex={[0]} allowMultiple>
            
  <AccordionItem border={"0px"}>
 
  <HStack justify={"center"}>

      <AccordionButton>

        
       
        <AccordionIcon />
      

<Text >
View FAQ
</Text>

      </AccordionButton>
      </HStack>
    <AccordionPanel >

    <HStack align={"start"}   w={{ base: "100%",
          xsm: "90%",
          ssm: "90%",
          sm: "90%",
          lg: "90%",
          xl: "70%",
          xxl: "70%",
          xxxl: "70%",}} flexWrap={"wrap"} justify={"center"} gap={"20px"}>
          {questions.map((questionsBox) => (
            <Box
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
            }}
              key={questionsBox}
              fontSize={"13px"
              }
              borderRadius={"15px"}
              w={{ base: "320px",
              xsm: "320px",
              ssm: "320px",
              sm: "320px",
              md: "320px",
              lg: "350px",
              xl: "400px",
              xxl: "500px",
              xxxl: "500px",}}
              bgColor={"gray.200"}
              p={"1.5%"}
            >
              <Text>{questionsBox}</Text>
            </Box>
          ))}
        </HStack>
     
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
       
       </> : <HStack align={"start"}  w={{ base: "100%",
          xsm: "90%",
          ssm: "90%",
          sm: "90%",
          lg: "90%",
          xl: "70%",
          xxl: "70%",
          xxxl: "70%",}} flexWrap={"wrap"} justify={"center"} gap={"20px"}>
          {questions.map((questionsBox) => (
            <Box
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
            }}
              key={questionsBox}
              fontSize={"13px"
              }
              borderRadius={"15px"}
              w={{ base: "320px",
              xsm: "320px",
              ssm: "320px",
              sm: "320px",
              md: "320px",
              lg: "350px",
              xl: "400px",
              xxl: "500px",
              xxxl: "500px",}}
              bgColor={"gray.200"}
              p={"1.5%"}
            >
              <Text>{questionsBox}</Text>
            </Box>
          ))}
        </HStack>}
      </HStack>
    </>
  );
}
