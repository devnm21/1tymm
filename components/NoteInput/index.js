import {Link, Textarea} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
import { createMessage } from '../../api-client';
import { useState } from 'react';
import { Container } from '@chakra-ui/react';
import {ExternalLinkIcon} from '@chakra-ui/icons';

const NoteInput = () => {
	const [message, setMessage] = useState('');
	const [view, setView] = useState('note');
	const [link, setLink] = useState('');
	const [copyButtonText, setCopyButtonText] = useState('Copy');
	const [isLoading, setIsLoading] = useState(false);

	const createMessageHandler = async (e) => {
		e.preventDefault();
		setIsLoading(true)
		const res = await createMessage(message);
		setIsLoading(false);
		setView('link');
		const { iv, key } = res.data;
		setLink(`https://${window.location.host}/message/${iv}?key=${key}`)
	}
	if (view === 'link' && link) {
		return <>
			<Container css={{ marginTop: '200px', marginBottom: '80px', padding: '20px' }} backgroundColor={'red.100'} >
				<Link marginLeft={'10px'}
				      color={'purple.800'}
				      textDecoration={'underline'}
				      href={link} >
					{link}
				<ExternalLinkIcon mx="2px" />
				</Link>
				<Button
					display={'block'}
					backgroundColor={'purple'}
					bgColor={'green.400'}
					margin={'5px'}
					onClick={() => {
						navigator.clipboard.writeText(link);
						setCopyButtonText('Copied')
						}
					}
				>
					{copyButtonText}
				</Button>
			</Container>
			<Button
				backgroundColor={'purple'}
				color={'white'}
				padding={'20px'}
				marginTop={'10px'}
				loadingText={'Creating...'}
				onClick={() => {
					setView('note');
					setLink('');
				}}
				_hover={{ backgroundColor: 'purple' }} >
				Create Another Note
			</Button>
		</>
	}
	return <>
		<form onSubmit={createMessageHandler}>
		<Textarea required isRequired onChange={(e) => setMessage(e.target.value)} placeholder={'Enter your note here..'} height={300} />
		<Button
			backgroundColor={'purple'}
			type={'submit'}
			color={'white'}
			padding={'20px'}
			marginTop={'10px'}
			isLoading={isLoading}
			colorScheme="teal"
			variant="outline"
			_hover={{ backgroundColor: 'blue' }} >
			Create
		</Button>
		</form>
	</>
}

export default NoteInput;
