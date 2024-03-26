import { Box } from '@chakra-ui/react';
import { BsFolder, BsHouse } from 'react-icons/bs';
import PageButton from '@/components/buttons/page-button';
import styles from './navbar.module.css';

export function Navbar() {
  return (
    <Box className={styles['navbar']} backgroundColor={'purple.900'}>
      <Box>
        <PageButton Icon={BsHouse} link={'/'}>
          Me
        </PageButton>
        <PageButton Icon={BsFolder} link={'/projects'}>
          Projects
        </PageButton>
      </Box>
    </Box>
  );
}
