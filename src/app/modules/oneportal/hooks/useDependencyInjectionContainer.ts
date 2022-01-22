import { useContext } from "react"
import { DependencyInjectionContext } from "../contexts/DependencyInjectionContext"

export const useDependencyInjectionContainer = () => {
  return useContext(DependencyInjectionContext)
}
