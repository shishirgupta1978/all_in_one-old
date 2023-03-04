import axios from 'axios';
import { toast } from "react-toastify";


const api = async (config, thunkAPI) => {
	try {
		console.log(process.env.REACT_APP_BASE_URL);

		if (process.env.REACT_APP_BASE_URL !== undefined) {
			config['baseURL'] = `${process.env.REACT_APP_BASE_URL}/`;
		}
		if (config.hasOwnProperty('private')) {
			config['headers'] = { Authorization: `Bearer ${JSON.parse(localStorage.getItem('authTokens'))?.access}`, }
		}
		else {
			config['headers'] = { "Content-Type": "application/json", };

		}
		const res =await axios(config);
		return res.data;
	} catch (error) {
		let message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		message = `${message}. `
		let errormsg = error?.response?.data;
		if (errormsg) {
			if ((typeof errormsg) === "string") {
				if (error.response?.statusText != null) {
					message += `\n${error.response?.statusText}.`
				}
			}
			else {
				for (const item of Object.keys(errormsg)) {
					message += `\n${item}: ${JSON.stringify(errormsg[item])}. `;
				}
			}

		}
		console.log(message);
		toast.error(message);
		return thunkAPI.rejectWithValue(message);
	}
}



export default api;