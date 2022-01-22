import { SortDirection } from "./SortDirection"

export type ChunkedParams = {
  page?: number
  limit?: number
  orderBy?: SortDirection
  sortBy?: string
  search?: string
}
