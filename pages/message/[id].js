import { Container } from '@chakra-ui/react';
import connectDB from '../../db/connect';
import modelMessage from '../../db/models/note';

const DecryptedMessage = ({ decryptedMessage, error }) => {
	if (decryptedMessage) {
		return <>
			<Container >
				<p>This message is now deleted. Please copy it somewhere if you need it again.</p>
				<br/>
				<p>The message:</p>
				<p>
					<Container color={'red'} backgroundColor={'green.300'}>
						{decryptedMessage}
					</Container>
				</p>
			</Container>
		</>
	}
	return <>
		<Container centerContent >
			<p>Couldn&apos;t decrypt/find message</p>
			Error : {error}
		</Container>
	</>
	
}

export const getServerSideProps = async (context) => {
	const { key, id } = context.query;
	let error, decryptedMessage = null;
	try {
		const conn = await connectDB();
		const Message = modelMessage(conn);
		decryptedMessage = await Message.decrypt(id, key);
	} catch (e) {
		console.log('ssss', e)
	    error = e.message || e.name || null;
	}
	return {
		props: {
			decryptedMessage,
			error: error || " ",
		}, // will be passed to the page component as props
	}
}

export default DecryptedMessage;