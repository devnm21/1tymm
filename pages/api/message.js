import connectDB from '../../db/connect';
import modelMessage from '../../db/models/note';

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const conn = await connectDB();
		const Message = modelMessage(conn);
		const { content } = req.body;
		const mes = await Message.createEncryptedMessage(content);
		return res.status(200).send(`https://${process.env.CLIENT_HOST}/message/${mes.iv}?key=${mes.key}`);
	}
};

export default handler;
