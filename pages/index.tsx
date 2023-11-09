'use client'

import { HStack, Heading, VStack } from '@chakra-ui/react'
import NavBar from '../component/NavBar';
import Header from '../component/Header';
import Socials from '../component/Socials';
import MainPageStepper from '../component/MainPageStepper';
import CarRenderer from '../component/CarRenderer';


const IndexPage = () => (
  <>
    <NavBar />
    <VStack width={'100%'}>

      <VStack maxWidth={'5xl'} width={'100%'} align={'start'} border='4px' borderColor='gray.700' boxShadow='dark-lg' p='6' rounded='md'>

        <VStack spacing={20} align={'start'}>
          <HStack>
            
          <Header />

          <CarRenderer/>
          </HStack>
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
