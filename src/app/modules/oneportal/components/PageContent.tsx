import { ReactNode } from "react"
import { PageTitle } from "./PageTitle"
import styled from "styled-components"

export type PageContentProps = {
  children: ReactNode
  helmet: string
  pageTitle?: string
}

export const PageContent = (props: PageContentProps) => {
  const { children, helmet, pageTitle } = props
  return (
    <section>
      <PageTitle title={helmet} />
      <div>
        <CustomTitle>{pageTitle || helmet}</CustomTitle>
      </div>
      {children}
    </section>
  )
}

const CustomTitle = styled.h2`
  font-family: TheSansBold;
`
