import { HStack, Heading, Card, CardHeader, Text, Box } from "@chakra-ui/react";


import TutorOne from "../../assets/Tutors/Implementing-tutoring-interventions-in-schools.jpg";
import TutorTwo from "../../assets/Tutors/1571923135-hero2-1024x646.png";
import TutorThree from "../../assets/Tutors/Spanish-Tutor.jpg";
import EndorsementBanner from "./Components/EndorsementBanner";
import Header from "../../components/Header";

export default function AboutUs() {
  return (
    <>
      <Header  MainText={"We Excel at Supporting"}
      SubText={"Help us Help you to achicve greantness for all you eductanal needs and desiers"}/>
      <HStack
        padding={"5%"}
        flexWrap={{
          base: "wrap",
          xsm: "wrap",
          ssm: "wrap",
          sm: "wrap",
          md: "nowrap",
          lg: "nowrap",
          xl: "nowrap",
          xxl: "nowrap",
          xxxl: "nowrap",
        }}
        mt={{
          base: "150px",
          xsm: "150px",
          ssm: "200px",
          sm: "200px",
          md: "200px",
          lg: "200px",
          xl: "200px",
          xxl: "200px",
          xxxl: "200px",
        }}
        justify={"center"}
        gap={"20px"}
        align={"start"}
        textAlign={{
          base: "left",
          xsm: "left",
          ssm: "left",
          sm: "left",
          md: "left",
          lg: "left",
          xl: "left",
          xxl: "left",
          xxxl: "left",
        }}
      >
        <Card
        
          padding={"0px"}
          minW={"300px"}
          w={{
            base: "100%",
            xsm: "100%",
            ssm: "100%",
            sm: "100%",
            md: "30%",
            lg: "30%",
            xl: "30%",
            xxl: "30%",
            xxxl: "30%",
          }}
          bgColor={"transparent"}
          boxShadow={"0"}
        >
          <CardHeader >
            <Heading  fontSize={{ base: "40px",
          xsm: "40px",
          ssm: "50px",
          sm: "50px",
          md: "60px",
          lg: "60px",
          xl: "60px",
          xxl: "70px",
          xxxl: "70px",}}>Best of Bests</Heading>
            <br />
            <Text fontSize={"17px"} >
              Our tutors are the best because they're experts in their fields
              with advanced degrees and professional experience
              <br /> <br />
              Committed to student success, they provide ongoing support,
              adapting their teaching to individual needs.
            </Text>
          </CardHeader>
        </Card>
        <Box
          backgroundImage={TutorOne}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          boxShadow={"0 0 10px 1px black"}
          transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
          }}
          w={"910px"}
          h={"500px"}
          borderRadius={"20px"}
        >
          <HStack
            justify={"center"}
            align={"end"}
            w={"100%"}
            h={"100%"}
          ></HStack>
        </Box>
      </HStack>
      <HStack
        padding={"5%"}
        textAlign={{
          base: "left",
          xsm: "left",
          ssm: "left",
          sm: "left",
          md: "left",
          lg: "left",
          xl: "left",
          xxl: "left",
          xxxl: "left",
        }}
        mt={"150px"}
        justify={"center"}
        gap={"20px"}
        align={"start"}
        flexWrap={{
          base: "wrap",
          xsm: "wrap",
          ssm: "wrap",
          sm: "wrap",
          md: "nowrap",
          lg: "nowrap",
          xl: "nowrap",
          xxl: "nowrap",
          xxxl: "nowrap",
        }}
      >
        <Box
          backgroundImage={TutorTwo}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          boxShadow={"0 0 10px 1px black"}
          transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
          }}
          w={"910px"}
          h={"500px"}
          borderRadius={"20px"}
        >
          <HStack
            justify={"center"}
            align={"end"}
            w={"100%"}
            h={"100%"}
          ></HStack>
        </Box>

        <Card
        
        
          padding={"0px"}
          minW={"300px"}
          w={{
            base: "100%",
            xsm: "100%",
            ssm: "100%",
            sm: "100%",
            md: "30%",
            lg: "30%",
            xl: "30%",
            xxl: "30%",
            xxxl: "30%",
          }}
          bgColor={"transparent"}
          boxShadow={"0"}
        >
          <CardHeader>
            <Heading  fontSize={{ base: "40px",
          xsm: "40px",
          ssm: "50px",
          sm: "50px",
          md: "60px",
          lg: "60px",
          xl: "60px",
          xxl: "70px",
          xxxl: "70px",}}>1000+ Tutors</Heading>
            <br />
            <Text fontSize={"17px"} >
              over 1000 tutors, providing unparalleled access to expertise
              across a wide range of subjects and disciplines.
              <br /> <br />
          whether it's in mathematics,
              science, language arts, or any other area of study.
            </Text>
          </CardHeader>
        </Card>
      </HStack>
      <HStack
        padding={"5%"}
        flexWrap={{
          base: "wrap",
          xsm: "wrap",
          ssm: "wrap",
          sm: "wrap",
          md: "nowrap",
          lg: "nowrap",
          xl: "nowrap",
          xxl: "nowrap",
          xxxl: "nowrap",
        }}
        mt={{
          base: "150px",
          xsm: "150px",
          ssm: "200px",
          sm: "200px",
          md: "200px",
          lg: "200px",
          xl: "200px",
          xxl: "200px",
          xxxl: "200px",
        }}
        justify={"center"}
        gap={"20px"}
        align={"start"}
        textAlign={{
          base: "left",
          xsm: "left",
          ssm: "left",
          sm: "left",
          md: "left",
          lg: "left",
          xl: "left",
          xxl: "left",
          xxxl: "left",
        }}
      >
        <Card
        
          padding={"0px"}
          minW={"300px"}
          w={{
            base: "100%",
            xsm: "100%",
            ssm: "100%",
            sm: "100%",
            md: "30%",
            lg: "30%",
            xl: "30%",
            xxl: "30%",
            xxxl: "30%",
          }}
          bgColor={"transparent"}
          boxShadow={"0"}
        >
          <CardHeader>
            <Heading  fontSize={{ base: "40px",
          xsm: "40px",
          ssm: "50px",
          sm: "50px",
          md: "60px",
          lg: "60px",
          xl: "60px",
          xxl: "70px",
          xxxl: "70px",}}>Face to face and Online</Heading>
            <br />
            <Text fontSize={"17px"} >
              Our tutoring company provides a dual approach with both physical
              and online services. 
              <br /> <br /> Students can opt for traditional, in-person
              sessions offering personalized interaction.
            </Text>
          </CardHeader>
        </Card>
        <Box
          backgroundImage={TutorThree}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"center"}
          backgroundSize={"cover"}
          boxShadow={"0 0 10px 1px black"}
          transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
          }}
          w={"910px"}
          h={"500px"}
          borderRadius={"20px"}
        >
          <HStack
            justify={"center"}
            align={"end"}
            w={"100%"}
            h={"100%"}
          ></HStack>
        </Box>
      </HStack>

      <EndorsementBanner />
    </>
  );
}
