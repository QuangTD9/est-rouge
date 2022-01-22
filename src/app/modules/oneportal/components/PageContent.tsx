import { ReactNode } from "react"
import { PageTitle } from "./PageTitle"
import styled from "styled-components"

export type PageContentProps = {
  children: ReactNode
  pageTitle: string
}

export const PageContent = (props: PageContentProps) => {
  const { children, pageTitle } = props
  return (
    <section>
      <PageTitle title={pageTitle} />
      <div>
        <CustomTitle>{pageTitle}</CustomTitle>
      </div>
      {children}
    </section>
  )
}

const CustomTitle = styled.h2`
  font-family: TheSansBold;
`
