import { Button, Flex, Heading, Input, useColorMode, useColorModeValue, Img } from "@chakra-ui/react";
import { Box, Spacer, Text } from "@chakra-ui/react";
import { Container, Stack, Icon } from '@chakra-ui/react';
import { useState } from "react";
import { SunIcon,MoonIcon } from '@chakra-ui/icons';
import {
  Divider,
  List,
  ListIcon,
  ListItem
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import {
  chakra,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import {
  Image,
  IconButton,
  createIcon,
  IconProps,
} from '@chakra-ui/react';
import {
  VStack,
  useBreakpointValue
} from '@chakra-ui/react';


export default function DashboardLogin(){
  const {toggleColorMode} = useColorMode()
  const formBackgroundColor = useColorModeValue("gray.100","gray.900")
  const backgroundColor = useColorModeValue("gray.300","gray.700")
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () =>{
    toggleColorMode()
    if(!darkTheme){
      setDarkTheme(true)
    }
    if(darkTheme){
      setDarkTheme(false)
    }
  }

  const showIcon = () =>{
    if(!darkTheme){
      return(<SunIcon />)
    }
    if(darkTheme){
      return(<MoonIcon />)
    }
  }

  return (
    <Flex width="100%" justifyItems="center" background={backgroundColor} direction="column">
      <Flex position="sticky" width="100%" paddingTop="10%" paddingLeft="2%" paddingRight="2%" height="10vh" alignItems="center" justifyContent="center">
        <Flex direction="row" justifyContent="center" alignContent="center">
          <Img boxSize="50px" src="/favicon.jpg" alt="bg-image" borderRadius="full"/>
          <Text marginTop="6px" marginLeft="20px" fontWeight="bold" fontSize='25px'>Reign Forest</Text>
        </Flex>
        <Spacer />
        <Button onClick={()=>toggleTheme()} >{showIcon()}</Button>
      </Flex> 
      {CallToActionWithVideo()}
      <Divider/>
      {WithBackgroundImage()}
      <Divider/>
      {CallToActionWithIllustration()}
      <Divider/>
      {ThreeTierPricingHorizontal()}
      <Divider/>
      {JoinOurCommunity()}
      <Divider/>
      {SmallWithLogoLeft()}
    </Flex>
  )
}



function CallToActionWithVideo() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}>
              Reign
            </Text>
            <br />
            <Text as={'span'} color={'purple.400'}>
              Forest
            </Text>
          </Heading>
          <Text color={'gray.500'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quod in iure vero. Facilis magnam, sed officiis commodi labore
              odit.
          </Text>
          <Stack width="max-content">
            <Button
              bg={'purple.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'purple.500' }}>
              Join Discord
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

export const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};



function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'60vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Events: Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor <br />
            Join Discord To Get Latest Information Of Events
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'purple.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'purple.500' }}>
              Join Discord
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Book A Ticket
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}


function CallToActionWithIllustration() {
  return (
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        width="100%">
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Join Our{' '}
          <Text as={'span'} color={'purple.400'}>
            Community
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quod in iure vero. Facilis magnam, sed officiis commodi labore
              odit.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'purple'}
            bg={'purple.400'}
            _hover={{ bg: 'purple.500' }}>
            Fill Membership Form
          </Button>
        </Stack>
        
      </Stack>
  );
}

function JoinOurCommunity() {
  return (
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        width="100%">
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
            Be a {' '}
          <Text as={'span'} color={'purple.400'}>
            Vendor
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quod in iure vero. Facilis magnam, sed officiis commodi labore
              odit.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'purple'}
            bg={'purple.400'}
            _hover={{ bg: 'purple.500' }}>
            Fill Member Form
          </Button>
        </Stack>
        
      </Stack>
  );
}



const options = [
  { id: 1, desc: '1 lorem ipsum' },
  { id: 2, desc: 'Lorem, ipsum dolor.' },
  { id: 3, desc: 'Monthly Updates' },
];

const PackageTier = ({
  title,
  options,
  typePlan,
  checked = false,
}) => {
  const colorTextLight = checked ? 'white' : 'purple.600';
  const bgColorLight = checked ? 'purple.400' : 'gray.300';

  const colorTextDark = checked ? 'white' : 'purple.500';
  const bgColorDark = checked ? 'purple.400' : 'gray.300';

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}>
      <Heading width="max-content" size={'md'}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={'xl'}>{typePlan}</Heading>
      <Stack>
        <Button
          size="md"
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}>
          Subcribe
        </Button>
      </Stack>
    </Stack>
  );
};
const ThreeTierPricingHorizontal = () => {
  return (
    <Box py={6} px={5} min={'100vh'}>
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}>
          <Stack
            width={{
              base: '100%',
              md: '40%',
            }}
            textAlign={'center'}>
            <Heading size={'lg'}>
              The Right Plan for <Text color="purple.400">Your Needs</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '60%',
            }}>
            <Text textAlign={'center'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quod in iure vero. Facilis magnam, sed officiis commodi labore
              odit.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier title={'Member'} typePlan="Free" options={options} />
        <Divider />
        <PackageTier title={'Plus'} typePlan="$32.00" options={options}/>
        <Divider />
        <PackageTier title={'Vip'} typePlan="$50.00" options={options} />
        <Divider />
        <PackageTier title={'Premium'} typePlan="$50.00" options={options} />
      </Stack>
    </Box>
  );
};








const Logo = (props) => {
  return (
    <Img boxSize="50px" src="/favicon.jpg" alt="bg-image" borderRadius="full"/>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Logo />
        <Text>© 2022 Reign Forest. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}