import { PAGE_LIMIT_DEFAULT } from "../units/constants"
import { useQuery } from "./useQuery"

export type PageLimitQuery = {
  limit?: number
  page?: number
}

export const usePageLimit = () => {
  const [query, , patchQuery] = useQuery<PageLimitQuery>({})

  const handleChangeLimitPage = (limit: number) => {
    patchQuery({ limit: limit === PAGE_LIMIT_DEFAULT ? undefined : limit, page: undefined })
  }

  const bind = () => ({
    onChangeLimitPage: handleChangeLimitPage,
  })

  return {
    query,
    bind,
  }
}
