import { useQuery } from "./useQuery"

export type SearchQuery = {
  search?: string
}

export const usePageSearch = () => {
  const [query, , patchQuery] = useQuery<SearchQuery>({})

  const handleSearch = (search?: string) => {
    if (!search) {
      patchQuery({ search: undefined })
    } else {
      patchQuery({ search })
    }
  }

  const bind = () => ({
    onSearch: (searchValue?: string) => handleSearch(searchValue),
  })

  return {
    query,
    bind,
  }
}
