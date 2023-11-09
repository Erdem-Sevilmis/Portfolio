'use client';
import { Code, HStack, Heading, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function MainPageStepper() {
    useEffect(() => animateCode());
    return (
        <>
            <Code id='code'></Code>
        </>
    );
}

var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
function animateCode() {
    if (i < txt.length) {
        document.getElementById("code").innerHTML += txt.charAt(i);
        i++;
        setTimeout(animateCode, speed);
    }
}

