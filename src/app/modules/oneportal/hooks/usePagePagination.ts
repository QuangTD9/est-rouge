import { useQuery } from "./useQuery"

export type PagePaginationQuery = {
  page?: number
}

export type UsePagePaginationProps = {
  pageCount?: number
}

export const usePagePagination = (props: UsePagePaginationProps) => {
  const { pageCount } = props
  const [query, , patchQuery] = useQuery<PagePaginationQuery>({})

  const handleGoToPrevPage = () => {
    query.page && patchQuery({ page: query.page.toString() === "2" ? undefined : query.page - 1 })
  }

  const handleGoToPage = (page: number) => {
    if (page === 1) {
      patchQuery({ page: undefined })
      return
    }
    patchQuery({ page })
  }

  const handleGoToNextPage = () => {
    if (!query.page) {
      patchQuery({
        page: 2,
      })
      return
    }
    query.page.toString() !== pageCount?.toString() &&
      patchQuery({
        page: parseInt(query.page.toString()) + 1,
      })
  }

  const bind = () => ({
    onGoToPrevPage: handleGoToPrevPage,
    onGoToNextPage: handleGoToNextPage,
    onGoToPage: handleGoToPage,
  })

  return {
    query,
    pageCount,
    bind,
  }
}
