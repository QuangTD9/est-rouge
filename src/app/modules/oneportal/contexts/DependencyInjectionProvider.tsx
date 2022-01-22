import { ReactNode } from "react"
import { DependencyInjectionContainer, DependencyInjectionContext } from "./DependencyInjectionContext"
import { apiClient } from "../services/container"

export type DependencyInjectionProps = {
  children?: ReactNode
}
export const DependencyInjectionProvider = (props: DependencyInjectionProps) => {
  const { children } = props

  const container: DependencyInjectionContainer = {
    apiClient: apiClient,
  }

  return <DependencyInjectionContext.Provider value={container}>{children}</DependencyInjectionContext.Provider>
}
