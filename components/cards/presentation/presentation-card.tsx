import { Avatar, Badge, Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

function TechIcon({ id }: { id: string }) {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} marginRight={'5px'}>
      <Image
        height={32}
        width={32}
        src={'/icons/technologies/' + id + '.webp'}
        alt={id + ' icon'}
      />
    </Flex>
  );
}

export default function PresentationCard() {
  return (
    <Flex>
      <Box>
        <Box>
          <Box
            as="a"
            href="https://github.com/bremgovi"
            target="_blank"
            rel="noreferrer"
            display="inline-block"
            transition="0.3s"
            _hover={{
              filter: 'brightness(80%)',
            }}
          >
            <Avatar
              size="2xl"
              src="https://avatars.githubusercontent.com/u/89049877"
            />
          </Box>
        </Box>
        <Box textAlign={'center'}>
          <Badge colorScheme={'pink'}>Available to Hire</Badge>
        </Box>
      </Box>
      <Box marginLeft={'20px'}>
        <Heading size={'xl'}>Bremgovi</Heading>
        <Text>⚛️ React.js, Next.js, NextAuth, Java, Python and more.</Text>
        <Text>
          ☕ Developer with experience in web development, frontend and backend
        </Text>
        <Text>
          💖 Experience with databases like PostgreSQL, SQLite, DB2 and Oracle
        </Text>

        <Flex marginTop={'5px'} alignItems={'center'}>
          <TechIcon id={'git'} />
          <TechIcon id={'html'} />
          <TechIcon id={'java'} />
          <TechIcon id={'javascript'} />
          <TechIcon id={'mysql'} />
          <TechIcon id={'nextjs'} />
          <TechIcon id={'nodejs'} />
          <TechIcon id={'python'} />
          <TechIcon id={'react'} />
          <TechIcon id={'typescript'} />
        </Flex>
      </Box>
    </Flex>
  );
}
