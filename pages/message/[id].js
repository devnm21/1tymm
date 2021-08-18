import { useRouter } from 'next/router'
import Message from '../../db/models/note';

const DecryptedMessage = ({ id, decryptedMessage }) => {
	return <>
		<p>The decrypted message is</p>
		<p>
			{decryptedMessage}
		</p>
	</>
}

export const getServerSideProps = async (context) => {
	const { key, id } = context.query;
	const decryptedMessage = await Message.decrypt(id, key);
	return {
		props: {
			id,
			decryptedMessage,
		}, // will be passed to the page component as props
	}
}

export default DecryptedMessage;