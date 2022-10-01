import { Button, Flex, Heading, Input, useColorMode, useColorModeValue, Img } from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react'
import { useState } from "react";

export default function StaffLogin(){
  const {toggleColorMode} = useColorMode()
  const formBackgroundColor = useColorModeValue("gray.400","gray.900")
  const backgroundColor = useColorModeValue("gray.300","gray.700")
  const [login, setLogin] = useState(false)
  const [loginClicked, setLoginClicked] = useState(false)
  const [loginStatus, setLoginStatus] = useState("success")
  const [loginMessage, setLoginMessage] = useState("Login Success")

  const loginToDashboard = ()=>{
    setLoginClicked(true)
    setLoginStatus("error")
    setLoginMessage("Invalid email or password")
  }

  const loginSuccess = ()=>{
    setLoginStatus("success")
    setLoginMessage("Login Success")
    setLogin(true)
  }

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" background={backgroundColor}>
      <Flex direction="column" background={formBackgroundColor} p={12} rounded={6}  boxShadow='dark-lg'>
        <Flex justifyContent="center" alignItems="center"  direction="column">
          <Img border="4px" padding="2px" objectFit="" boxSize="100px" src="/favicon.jpg" alt="bg-image" marginBottom="10px" borderRadius="full"/>
          <Heading marginBottom="20px">Staff Login</Heading>
        </Flex>
        {
          loginClicked &&
          <Alert status={loginStatus} marginBottom="20px" variant='left-accent' onClick={()=>loginSuccess()}>
            <AlertIcon />
            <AlertTitle>{loginMessage}</AlertTitle>
          </Alert>
        }
        <Input placeholder="Username or Email" variant="filled"  mb={3} type="text" marginBottom="10px"/>
        <Input placeholder="***********" variant="filled" mb={6} type="password" marginBottom="30px"/>
        {
          !login &&
          <Button mb={6} colorScheme="teal" marginBottom="5px" onClick={()=>loginToDashboard()}>Log in</Button>           
        }
        {
          login &&
          <Button mb={6} isLoading colorScheme='teal' variant='solid' marginBottom="5px">Log in</Button>           
        }
        
        <Flex justifyContent="center" alignItems="center"  direction="row" marginBottom="20px" marginTop="10px">
          <Button mb={1} onClick={toggleColorMode}>Toggle Color</Button>
        </Flex>     
      </Flex>
    </Flex>
  )
}