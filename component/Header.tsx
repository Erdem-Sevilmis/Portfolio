'use client';

import { VStack, Heading, Text } from "@chakra-ui/react";

export default function Header() {
    return (
        <VStack spacing={10} align={'start'} width={{ xl: '700px' }}>
            <Heading fontSize="5xl" marginBottom={0} paddingBottom={0}> Hey, I am <Heading as="span" fontSize="5xl" bgGradient='linear(to-tr, #ad5389, #3F5EFB)' bgClip='text' fontWeight='extrabold'>Erdem Sevilmis</Heading></Heading>
            <VStack align={'start'}>
                <Text fontSize="3xl">a software engineer with a passion for elegant code and stunning user experiences.</Text>
                <Text fontSize="3xl">Feel free to take a look around.👨‍🦽</Text>
            </VStack>
        </VStack>
    );
}