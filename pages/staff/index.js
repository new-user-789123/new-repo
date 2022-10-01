import { Button, Flex, Heading, Input, useColorMode, useColorModeValue, Img } from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react'
import { useState } from "react";
import { Box, Container, Stack, Link } from "@chakra-ui/react"
import NextLink from "next/link"

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
      {SmallCentered()}
    </Flex>
  )
}


function SmallCentered() {
  return (
    <Box
      bg="transparent"
      color={useColorModeValue('gray.700', 'gray.200')}
      width="100vw"
      position="fixed"
      bottom="0px"
      marginTop="10px">
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Stack direction={'row'} spacing={6}>
          <NextLink href='/' passHref><Link>Home</Link></NextLink>
          <NextLink href='/dashboard' passHref><Link>Dashboard</Link></NextLink>
          <NextLink href='/staff' passHref><Link>Staff Dashboard</Link></NextLink>
          <NextLink href='/member' passHref><Link>Member Dashboard</Link></NextLink>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
        </Container>
      </Box>
    </Box>
  );
}