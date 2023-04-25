import axios from 'axios'

const interceptorsLogin = axios.create({
	baseURL: 'https://api-cockpit-dev.nave.rs',
})

interceptorsLogin.interceptors.request.use((config) => {
	return config
})

export { interceptorsLogin }
