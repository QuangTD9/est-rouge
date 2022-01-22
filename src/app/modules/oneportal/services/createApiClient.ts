import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

export const createApiClient = (config: AxiosRequestConfig = {}): AxiosInstance => {
  const http = axios.create(config)

  http.interceptors.request.use(async (config: any) => {
    config.headers["Access-Control-Allow-Origin"] = "*"
    config.headers["Access-Control-Allow-Methods"] = "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    config.headers["Access-Control-Allow-Headers"] = "Origin, Content-Type, X-Auth-Token"
    config.headers["accept"] = "application/json"

    return config
  })

  return http
}
