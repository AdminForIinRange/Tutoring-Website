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
  Box,
  Icon,
} from "@chakra-ui/react";
import Header from "../../Components/Header";
import InputBar from "./Components/InputBar";
import ItTeacher from "../../assets/People/brunette-man-isolated-white-background_1368-4404.png";
import MatchsTutor from "../../assets/People/satisfied-executive-with-mustache-glasses_1154-240.png";
import EnglishMajor from "../../assets/People/artist-white_1368-3546.png";
import Teacher from "../../assets/People/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed.png";
import Accounting from "../../assets/People/young-tender-curly-girl-holding-documents_176420-238.png";

import { MdOutlineAttachMoney } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";
import { CiBadgeDollar } from "react-icons/ci";
import TutorCard from "../../components/TutorCard";






export default function FindTutor() {
  return (
    <>
      <Header
        MainText={"Find a Tutor"}
        SubText={"Our Highly Acclaimed Top-Rated Tutors of the Month"}
      />

      <VStack
        w={"100%"}
        h={"100%"}
        align={"center"}
        justify={"center"}
        mt={"50px"}
      >
        <HStack
          flexWrap={"wrap"}
          w={{ base: "95%",
          xsm: "95%",
          ssm: "95%",
          sm: "95%",
          md: "90%",
          lg: "90%",
          xl: "90%",
          xxl: "70%",
          xxxl: "70%",}}
          h={"100%"}
          align={"center"}
          justify={"center"}
          gap={{ base: "10px",
          xsm: "10px",
          ssm: "10px",
          sm: "20px",
          md: "20px",
          lg: "20px",
          xl: "30px",
          xxl: "30px",
          xxxl: "30px",}}
        >
          <TutorCard
            mainColor={"teal"}
            Name={"Mike"}
            Cert={true}
            Img={EnglishMajor}
            Hourly={"38-49/h"}
            Role={"English Major "}
          />
          <TutorCard
            mainColor={"#2B323C"}
            Name={"Mia"}
            Cert={true}
            Img={Accounting}
            Hourly={"42-61/h"}
            Role={"Software Developer "}
          />

          <TutorCard
            mainColor={"#757174"}
            Name={"Mike"}
            Cert={true}
            Img={MatchsTutor}
            Hourly={"56-60/h"}
            Role={"Maths Teacher "}
          />
          <TutorCard
            mainColor={"#2B323C"}
            Name={"Axel"}
            Cert={true}
            Img={ItTeacher}
            Hourly={"42-61/h"}
            Role={"Web Developer "}
          />

          <TutorCard
            mainColor={"#757174"}
            Name={"Mia"}
            Cert={true}
            Img={Teacher}
            Hourly={"56-60/h"}
            Role={"Maths Teacher "}
          />

        
        </HStack>
      </VStack>

      <Box
        position="relative"
        padding={{
          base: "50",
          xsm: "50",
          ssm: "50",
          sm: "50",
          md: "70",
          lg: "70",
          xl: "70",
          xxl: "70",
          xxxl: "70",
        }}
      >
        <Divider />
        <AbsoluteCenter
          fontSize={"20px"}
          bg="white"
          borderRadius={"15px"}
          px="10"
        >
          Or
        </AbsoluteCenter>
      </Box>
      <InputBar />
    </>
  );
}
