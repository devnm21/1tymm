import Head from 'next/head'
import LoginButton from '../components/Auth0Login';
import Navbar from '../components/Navbar';
import NoteInput from '../components/NoteInput';
import { Heading, UnorderedList, ListItem } from '@chakra-ui/react'
import {Container} from '@chakra-ui/react';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <>
      <Head>
        <title>1tymm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth={'50%'} >
        <NoteInput />
        <Heading as={'h3'}>With an account you can:</Heading>
        <UnorderedList>
          <ListItem>Keep track of your intact messages</ListItem>
          <ListItem>Attach images to your messages</ListItem>
          <ListItem>Mail directly from 1tymm</ListItem>
        </UnorderedList>
        <LoginButton />
      </Container>
      <br />
      <Footer />
    </>

  )
}
