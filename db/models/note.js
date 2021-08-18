import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const crypto = require('crypto');
const algorithm = 'aes-256-cbc'; //Using AES encryption

//Encrypting text
function encrypt(text) {
	const iv = crypto.randomBytes(16);
	const key = crypto.randomBytes(32);
	
	let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
	let encrypted = cipher.update(text);
	encrypted = Buffer.concat([encrypted, cipher.final()]);
	return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex'), key: key.toString('hex') };
}

// Decrypting text
function decrypt(iv, key, encryptedData) {
	iv = Buffer.from(iv, 'hex');
	key = Buffer.from(key, 'hex');
	const encryptedText = Buffer.from(encryptedData, 'hex');
	let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
	let decrypted = decipher.update(encryptedText);
	decrypted = Buffer.concat([decrypted, decipher.final()]);
	return decrypted.toString();
}

const messageSchema = new Schema({
	iv: {
		type: String,
		index: true,
		// required: true
	},
	content: {
		type: String,
		required: true
	},
	user: {
		type: mongoose.Types.ObjectId,
	},
}, {
	timestamps: true,
});

messageSchema.statics.createEncryptedMessage = async function (content)  {
	const { key, iv, encryptedData } = encrypt(content);
	await Message.create({
		iv: iv,
		content: encryptedData
	});
	return { iv, key }
}

messageSchema.statics.decrypt = async function (iv, key)  {
	try {
		const message = await Message.findOne({ iv });
		await Message.findByIdAndDelete(message._id);
		return decrypt(iv, key, message.content);
	} catch (e) {
		console.log(e)
		throw new Error('Decryption Failed')
	}

}

const Message = mongoose.models['Message'] || mongoose.model('Message', messageSchema);

export default Message;