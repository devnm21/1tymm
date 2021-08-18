import {  Container } from '@chakra-ui/react'
const Navbar = () => {
	return <>
		<Container
			maxHeight={"md"}
			backgroundColor={'red.200'}
			maxWidth={'full'}
			type={'telegram'}
			centerContent
			css={{ position: 'fixed', top: 0 }}>
			<img className={'mx-auto rounded-full py-1 px-4'} src={'/privnote-logo.svg'} alt={'logo'} />
			<p>
				Share encrypted messages to anyone which self-destruct themselves after being read
			</p>
		</Container>
	</>
}
export default Navbar;