import { ReactNode } from "react"
import styled from "styled-components"

export type MainLayoutProps = {
  children: ReactNode
}

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props

  return <Root>{children}</Root>
}

const Root = styled.main`
  padding: 2rem 10rem;
  min-width: 500px;

  @media only screen and (max-width: 600px) {
    padding: 2rem 1rem;
  }
`
