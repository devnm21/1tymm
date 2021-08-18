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
	const createMessageHandler = async (e) => {
		e.preventDefault();
		const res = await createMessage(message);
		console.log(res.data);
		setView('link');
		setLink(res.data)
	}
	if (view === 'link' && link) {
		return <>
			<Container css={{ marginTop: '200px', marginBottom: '80px' }} backgroundColor={'red.100'} >
				<Link marginLeft={'10px'}
				      color={'purple.800'}
				      textDecoration={'underline'}
				      href={link} >
					{link}
				<ExternalLinkIcon mx="2px" />
				</Link>
			</Container>
			<Button
				backgroundColor={'purple'}
				color={'white'}
				padding={'20px'}
				marginTop={'10px'}
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
			_hover={{ backgroundColor: 'blue' }} >
			Create
		</Button>
		</form>
	</>
}

export default NoteInput;