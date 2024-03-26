import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

// Components.
import Layout from '@/components/layout';
import { ProjectsProvider } from '@/contexts/projects/projects-provider';
import theme from '@/theme';

import '../theme/globals.css';
import '../theme/scroll.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Hi, i'm Bremgovi! Welcome to my personal website. Take a look at my list of open-source projects"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon@32.png" />
      </Head>
      <ProjectsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProjectsProvider>
    </ChakraProvider>
  );
}
