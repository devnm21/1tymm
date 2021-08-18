import axios from 'axios';

export const createMessage = async (content) => axios.post('/api/message', {
		content
	});