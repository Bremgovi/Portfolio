import { Box, Heading, Text } from '@chakra-ui/react';

import PresentationCard from '../components/cards/presentation';

export default function Home() {
  return (
    <Box>
      <PresentationCard />

      <Box marginTop={'20px'}>
        <Heading size={'xl'}>Who am i?</Heading>
        <Text>
          My name is Emilio, I am a 19yo programmer from Mexico. I am Computer
          Systems Engineering student and I love programming and learning new
          things. 💫📕
        </Text>

        <Text marginTop={'20px'}>
          I am designer and developer, I can do backend and frontend tasks. I
          have experience with technologies like React, React Native, Next.js,
          Node.js, Express.js, NextAuth, PostgreSQL and more.💻
        </Text>

        <Text marginTop={'20px'}>
          I also like learning new languages, such as Japanese and Korean. I'm
          more experienced in Japanese Language but I studied abroad in Korea so
          I also have enough knowledge. 🍙
        </Text>
      </Box>
    </Box>
  );
}
