import { createApiClient } from "./createApiClient"

export const apiClient = createApiClient({
  baseURL: `${process.env.REACT_APP_BASE_URL_API}`,
})
