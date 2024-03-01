import {
 
    Input,
 
    HStack,

    InputGroup,

    Highlight,

    Button,
    Text,

    VStack,

    InputRightAddon,

  } from "@chakra-ui/react";
export default function InputBar() {
  return (
    <VStack
    className="animate__animated animate__fadeInUp "
    align={"center"}
    justify={"center"}
  
  >
    <InputGroup
    
      transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
      _hover={{
        transform: "scale(1.03)",
       
      }}
      w={{
        base: "350px",
        xsm: "350px",
        ssm: "350px",
        sm: "350px",
        md: "750px",
        lg: "750px",
        xl: "750px",
        xxl: "750px",
        xxxl: "750px",
      }}
      h={"50px"}
      size={"lg"}
      variant="filled"
      borderRadius={"20px"}
      bgColor={"#F5F5F5"}
    >
      <Input
        borderWidth={"0px"}
        h={"100%"}
        fontSize={"20px"}
        placeholder="Topic of Interest"
      />
      <InputRightAddon h={"100%"}>
        <Button colorScheme="teal" w={"100%"}>
       
        </Button>
      </InputRightAddon>
    </InputGroup>
  
  </VStack>

  )
}
