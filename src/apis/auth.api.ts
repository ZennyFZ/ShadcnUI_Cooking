import { APIClient, APIRouteType } from "./axios-interceptors";

const apiClient = APIClient({
    withCredentials: false,
    route: APIRouteType.Auth,
})

const authorizedApiClient = APIClient({
    withCredentials: true,
    route: APIRouteType.Auth
})

export interface LoginCredential {
    email: string,
    password: string
}

export const login = (credential: LoginCredential) => {
    return apiClient.post("/sign-in", credential)
}

export interface RegisterInformation {
    email: string,
    password: string,
    username: string
}

export const register = (registerInformation: RegisterInformation) => {
    return apiClient.post("/sign-up", registerInformation)
}