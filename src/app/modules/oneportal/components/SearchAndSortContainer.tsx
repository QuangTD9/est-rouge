import { ReactNode } from "react"
import styled from "styled-components"

export type PageSearchAndSortProps = {
  children: ReactNode
}

export const SearchAndSortContainer = (props: PageSearchAndSortProps) => {
  const { children } = props
  return <Root>{children}</Root>
}

const Root = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`
