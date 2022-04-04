import {  Container, Text } from '@chakra-ui/react'
const Navbar = () => {
	return <>
		<Container
			maxHeight={"md"}
			backgroundColor={'darkmagenta'}
			maxWidth={'full'}
			type={'telegram'}
			centerContent
			css={{ position: 'fixed', top: 0, zIndex: 1   }}>
			<img width={'250px'} className={'mx-auto rounded-full py-1 px-4'} src={'/1tymm-logo.png'} alt={'logo'} />
			<Text fontSize={'2xl'} color={'#fff'}>
				Share encrypted messages to anyone which self-destruct themselves after being read
			</Text>
		</Container>
	</>
}
export default Navbar;
