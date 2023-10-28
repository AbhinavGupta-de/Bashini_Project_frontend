import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const fetchTranslate = async (source, content, target) => {
	const req = { source, content, target };

	try {
		const response = await axios.post(`${API_URL}`, req);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
export { fetchTranslate };
