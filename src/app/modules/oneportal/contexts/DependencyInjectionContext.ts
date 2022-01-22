import { createContext } from "react"
import { AxiosInstance } from "axios"

export type DependencyInjectionContainer = {
  apiClient: AxiosInstance
}

export const DependencyInjectionContext = createContext<DependencyInjectionContainer>(undefined as any)
