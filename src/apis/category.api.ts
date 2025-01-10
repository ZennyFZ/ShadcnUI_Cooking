import { CategoryInterface } from "@/types";
import { APIClient, APIRouteType } from "./axios-interceptors";

const apiClient = APIClient({
  withCredentials: false,
  route: APIRouteType.Category,
});

const authorizedApiClient = APIClient({
  withCredentials: true,
  route: APIRouteType.Category,
});

export const GetCategories = () => {
  return apiClient.get("/");
};

export const GetCategoryById = (id: string) => {
  return apiClient.get(`/${id}`);
};

export const AddCategory = (categoryData: CategoryInterface) => {
  return authorizedApiClient.post("/admin/add-category", categoryData);
};

export const UpdateCategory = (categoryData: CategoryInterface) => {
  const formData = new FormData();

  for (const key in categoryData) {
    if (Object.prototype.hasOwnProperty.call(categoryData, key)) {
      formData.append(key, categoryData[key as keyof CategoryInterface]);
    }
  }

  return authorizedApiClient.patch("/admin/update-category", formData);
};

export const DeleteCategory = (id: string) => {
  return authorizedApiClient.delete(`/admin/delete-category/${id}`);
};
