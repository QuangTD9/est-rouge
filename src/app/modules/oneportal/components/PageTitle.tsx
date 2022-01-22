import { Helmet } from "react-helmet-async"
import { getAppConfig } from "../../../config/config"

export type PageTitleProps = {
  title?: string
}

export const PageTitle = (props: PageTitleProps) => {
  const config = getAppConfig()
  const { title } = props

  return (
    <Helmet>
      <title>{config.page.titleTemplate(title)}</title>
    </Helmet>
  )
}
