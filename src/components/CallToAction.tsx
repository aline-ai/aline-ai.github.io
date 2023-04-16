import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Image,
  } from '@chakra-ui/react';
// @ts-ignore
import { Browser } from "react-window-ui";
import demo from '../static/demo.png';

export default function CallToActionWithIllustration() {
return (
    <Container maxW={'5xl'}>
    <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        pt={{ base: 4, md: 8 }}
    >
        <Heading
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}>
        Aline:{' '}
        <Text as={'span'} color={'lilac.800'}>
            Reshaping Research
        </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
        Aline your reading with your writing. Enjoy context-aware autocompletions based on your reading.
        </Text>
        <Stack spacing={6} direction={'row'}>
            <Button
                rounded={'full'}
                px={6}
                colorScheme={'lilac'}
                bg={'lilac.800'}
                _hover={{ bg: 'lilac.900' }}>
                Get started
            </Button>
            <Button rounded={'full'} px={6}>
                Learn more
            </Button>
        </Stack>
        <Flex w={'full'}>
            <Browser padding="2rem 0 0 0">
                <Image src={demo} />
            </Browser>
        </Flex>
    </Stack>
    </Container>
);
}
