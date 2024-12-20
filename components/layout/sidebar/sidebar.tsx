import { Button, Flex, Text } from '@chakra-ui/react';

import Frame from '../frame';
import styles from './sidebar.module.css';

interface AboutMeSectionProps {
  label: string;
  value: string;
}

function AboutMeSection({ label, value }: AboutMeSectionProps) {
  return (
    <Flex justifyContent={'space-between'} margin={'10px 0'}>
      <Text fontWeight={'bold'}>{label}</Text>
      <Text>{value}</Text>
    </Flex>
  );
}

export default function Sidebar() {
  return (
    <Flex className={styles['sidebar']} width={'100%'} marginBottom={'20px'}>
      <Frame title="🌱 About me">
        <AboutMeSection label={'Age'} value={'20'} />
        <AboutMeSection label={'Birthday'} value={'Jul, 06'} />
        <AboutMeSection label={'Country'} value={'Mexico'} />
        <AboutMeSection label={'State'} value={'Coahuila'} />
      </Frame>
    </Flex>
  );
}
