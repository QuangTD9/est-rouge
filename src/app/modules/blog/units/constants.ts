import { SortDirection } from "../../oneportal/units/types/SortDirection"
import { DropdownSortItem } from "./../../oneportal/units/types/DropdownSortItem"

export const BLOG_SORT_ITEMS: DropdownSortItem[] = [
  {
    title: "Title ascending",
    orderBy: SortDirection.Ascending,
    sortBy: "title",
  },
  {
    title: "Title descending",
    orderBy: SortDirection.Descending,
    sortBy: "title",
  },
  {
    title: "Created at ascending",
    orderBy: SortDirection.Ascending,
    sortBy: "createdAt",
  },
  {
    title: "Created at descending",
    orderBy: SortDirection.Descending,
    sortBy: "createdAt",
  },
]

export const DEBOUNCE_SEARCH_TIME = 500
