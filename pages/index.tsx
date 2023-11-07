'use client'

import { Flex, Heading, Box, Container, Text, VStack, HStack, IconButton, Icon } from '@chakra-ui/react'
import NavBar from '../component/NavBar';
import Script from 'next/script';
import { start } from 'repl';
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiMinutemailer } from 'react-icons/si'
import { Span } from 'next/dist/trace';
import Header from '../component/Header';
import Socials from '../component/Socials';
import MainPageStepper from '../component/MainPageStepper';

const IndexPage = () => (
  <>

    <NavBar />
   
    <VStack width={'100%'}>

      <VStack maxWidth={'5xl'} width={'100%'} align={'start'} border='4px' borderColor='gray.700' boxShadow='dark-lg' p='6' rounded='md'>

        <VStack spacing={20} align={'start'}>
          <Header />
          <Socials />
          <Socials />
          <Socials />
          <Socials />
          <Socials />
          <Socials />
          <Heading>Projects</Heading>

        </VStack>
      </VStack>
    </VStack>
    <MainPageStepper />
  </>
)

export default IndexPage
