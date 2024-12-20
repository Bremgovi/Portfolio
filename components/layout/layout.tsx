import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

import Container from './container';
import Frame from './frame';
import Navbar from './navbar';
import Sidebar from './sidebar';

export default function Layout({ children }: PropsWithChildren) {
  const { pathname } = useRouter();

  return (
    <Container height={'100vh'} gap={'30px'} p={'45px 0'}>
      <Navbar />

      <Flex
        justifyContent={'space-between'}
        gap={'20px'}
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Box width={'100%'}>
          <Frame size="large" title={`📁 C:/BREMGOVI${pathname.toUpperCase()}`}>
            {children}
          </Frame>
        </Box>

        <Sidebar />
      </Flex>
    </Container>
  );
}
