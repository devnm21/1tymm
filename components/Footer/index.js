import {  Container } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
const Footer = () => {
	return <>
		<Container
			maxHeight={"full"}
			// paddingBottom={230}
			// backgroundColor={'blue.200'}
			maxWidth={'full'}
			type={'telegram'}
			centerContent
			>
			<p>
				<pre>
				Made with ❤ &amp;{  " </>"} ️by
				<Link marginLeft={'10px'} color={'purple.800'} textDecoration={'underline'} href="https://twitter.com/devanm21" isExternal>
					Dev	<ExternalLinkIcon mx="2px" />
				</Link>
									</pre>
			
			</p>
			
		</Container>
	</>
}
export default Footer;