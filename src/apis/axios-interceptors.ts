import { ENDPOINT } from "@/configs";
import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

export enum APIRouteType {
    Auth = "auth",
    Product = "product",
    Category = "category",
    Order = "order"
}

export interface InterceptorConfig {
    baseURL?: string
    route?: APIRouteType
    defaultHeaders?: Record<string, string>
    withCredentials?: boolean
}

const handleUnauthorize = () => {

}

const handleError = (error: AxiosError) => {
    switch(error.response?.status) {
        case 401: 
        handleUnauthorize()
        break;
        default: 
        console.error({
            statusCode: error.response?.status,
            message: error.response?.statusText
        })
    }
}

export const APIClient = (
    interceptorConfig: InterceptorConfig
): AxiosInstance => {
    const instance: AxiosInstance = axios.create({
        baseURL: `${interceptorConfig.baseURL? interceptorConfig.baseURL : ENDPOINT}/${interceptorConfig.route}`,
        headers: {
            ...(interceptorConfig.defaultHeaders || {})
        },
        withCredentials: interceptorConfig.withCredentials
    });

    instance.interceptors.request.use(
        (requestConfig: InternalAxiosRequestConfig) => {
            return requestConfig
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    instance.interceptors.response.use(
        (response: AxiosResponse) => {
            return response.data 
        },
        (error) => {
            handleError(error)
            return Promise.reject(error);
        }
    )

    return instance
}