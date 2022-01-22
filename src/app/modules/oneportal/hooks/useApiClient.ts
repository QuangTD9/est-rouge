import { useDependencyInjectionContainer } from "./useDependencyInjectionContainer"
import { AxiosInstance } from "axios"

export const useApiClient = (): AxiosInstance => {
  return useDependencyInjectionContainer().apiClient
}
