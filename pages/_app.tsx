import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { CSSReset, ThemeProvider } from '@chakra-ui/react';
import theme from './theme';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeProvider
                options={{
                    useSystemColorMode: true,
                }}>
                <CSSReset />
                <Component {...pageProps} />
            </ColorModeProvider>
        </ChakraProvider>
    );
}

export default MyApp;
