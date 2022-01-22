import { SortDirection } from "../units/types/SortDirection"
import { useQuery } from "./useQuery"

export type SorterQuery = {
  sortBy?: string
  orderBy?: SortDirection
}

export const useSorter = () => {
  const [query, , patchQuery] = useQuery<SorterQuery>({})

  const handleSort = (sortBy?: string, orderBy?: SortDirection) => {
    if (!sortBy) {
      patchQuery({ sortBy: undefined, orderBy: undefined })
    } else {
      patchQuery({ sortBy, orderBy })
    }
  }

  const bind = () => ({
    onClickSort: (sortBy?: string, orderBy?: SortDirection) => handleSort(sortBy, orderBy),
  })

  return {
    query,
    bind,
  }
}
