import { Text, VStack } from "@chakra-ui/react";
export default function Header({MainText, SubText}) {
  return (
    <VStack
      
      
      justify={"center"}
      align={"center"}
      mt={{
        base: "100px",
        xsm: "100px",
        ssm: "100px",
        sm: "100px",
        md: "150px",
        lg: "150px",
        xl: "150px",
        xxl: "150px",
        xxxl: "150px",
      }}
    >
      <Text
      textAlign={"center"}
        className="animate__animated animate__fadeIn  animate__fadeInUp "
        fontSize={{
          base: "40px",
          xsm: "40px",
          ssm: "50px",
          sm: "50px",
          md: "50px",
          lg: "90px",
          xl: "90px",
          xxl: "90px",
          xxxl: "90px",
        }}
        fontWeight={"bold"}
      >
   {MainText}
      </Text>
      <Text
        textAlign={"center"}
        w={"90%"}
        className="animate__animated animate__fadeIn  animate__fadeInUp "
        
        fontSize={{
          base: "15px",
          xsm: "15px",
          ssm: "15px",
          sm: "15px",
          md: "25px",
          lg: "25px",
          xl: "25px",
          xxl: "25px",
          xxxl: "25px",
        }}
  
      >
         {SubText}
      </Text>
    </VStack>
  );
}
