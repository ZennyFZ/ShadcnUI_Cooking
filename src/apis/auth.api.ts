import { APIClient, APIRouteType } from "./axios-interceptors";

const apiClient = APIClient({
  withCredentials: false,
  route: APIRouteType.Auth,
});

const authorizedApiClient = APIClient({
  withCredentials: true,
  route: APIRouteType.Auth,
});

export interface LoginCredential {
  email: string;
  password: string;
}

export const signIn = (credential: LoginCredential) => {
  return apiClient.post("/sign-in", credential);
};

export interface SignUpInformation {
  email: string;
  password: string;
  username: string;
}

export const signUp = (signUpInformation: SignUpInformation) => {
  return apiClient.post("/sign-up", signUpInformation);
};

export const refreshToken = () => {
  return authorizedApiClient.get("/refresh");
};

export const getProfile = () => {
  return authorizedApiClient.get("/me");
};

export const signOut = () => {
  return authorizedApiClient.get("/sign-out");
};
