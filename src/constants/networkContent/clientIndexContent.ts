export const clientIndexContent = `
import axios, {
	AxiosInstance,
	AxiosResponse,
	CreateAxiosDefaults,
	InternalAxiosRequestConfig,
} from 'axios';
import {
	baseCreateAxiosDefaults,
	baseOnRequestFullfilled,
	baseOnRequestRejected,
	baseOnResponseFullfiled,
	baseOnResponseRejected,
} from './baseConfig';

interface GetInstanceParams {
	createAxiosDefaults?: CreateAxiosDefaults;

	onRequestFullfilled?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
	onRequestRejected?: (error: Error) => void | Promise<never>;
	onResponseFullfilled?: (response: AxiosResponse) => AxiosResponse;
	onResponseRejected?: (error: Error) => void | Promise<never>;
}

class AxiosService {
	private static instance: AxiosInstance | null = null;

	static getInstance(getInstanceParams?: GetInstanceParams) {
		const {
			createAxiosDefaults = baseCreateAxiosDefaults,
			onRequestFullfilled = baseOnRequestFullfilled,
			onRequestRejected = baseOnRequestRejected,
			onResponseFullfilled = baseOnResponseFullfiled,
			onResponseRejected = baseOnResponseRejected,
		} = getInstanceParams ?? {};

		if (!AxiosService.instance) {
			AxiosService.instance = axios.create(createAxiosDefaults);

			AxiosService.instance.interceptors.request.use(onRequestFullfilled, onRequestRejected);
			AxiosService.instance.interceptors.response.use(onResponseFullfilled, onResponseRejected);
		}

		return AxiosService.instance;
	}
}

export const axiosInstance = AxiosService.getInstance();
export const getAxiosInstance = AxiosService.getInstance;
`;
