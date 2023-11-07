'use client';

import { VStack, Heading, Text, HStack, IconButton } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";

export default function Socials() {
    return (
        <VStack spacing={3} align={'start'}>
            <VStack align={'start'}>
                <Heading>Socials</Heading>
                <Text fontSize="2xl">Feel free to write an Email or Dm me!</Text>
            </VStack>
            <HStack>
                <IconButton aria-label='LinkedIn' icon={<BsLinkedin />}></IconButton>
                <IconButton aria-label='Github' icon={<BsGithub />}></IconButton>
                <IconButton aria-label='Email' icon={<SiMinutemailer />}></IconButton>
            </HStack>
        </VStack>
    );
}