import { Button, Flex, Heading, Input, useColorMode, useColorModeValue, Img, Box } from "@chakra-ui/react";


export default function CreatePassword(){
  const {toggleColorMode} = useColorMode()
  const formBackgroundColor = useColorModeValue("gray.400","gray.900")
  const backgroundColor = useColorModeValue("gray.300","gray.700")

  const Username = "Vibhuti Singh"
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" background={backgroundColor}>
      <Flex direction="column" background={formBackgroundColor} p={12} rounded={6}  boxShadow='dark-lg'>
        <Flex justifyContent="center" alignItems="center"  direction="column">
          <Img border="4px" padding="2px" objectFit="" boxSize="100px" src="/favicon.jpg" alt="bg-image" marginBottom="10px" borderRadius="full"/>
          <Box textStyle="h2" marginBottom="20px">{Username}</Box>
        </Flex>
        <Input placeholder="Password" variant="filled"  mb={3} type="text" marginBottom="10px"/>
        <Input placeholder="Confirm Password" variant="filled" mb={6} type="password" marginBottom="30px"/>
        <Button mb={6} colorScheme="teal" marginBottom="5px">Log in</Button> 
        <Flex justifyContent="center" alignItems="center"  direction="row" marginBottom="20px" marginTop="10px">
          <Button mb={1} onClick={toggleColorMode}>Toggle Color</Button>
        </Flex>     
      </Flex>
    </Flex>
  )
}