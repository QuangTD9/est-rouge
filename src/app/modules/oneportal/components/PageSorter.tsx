import clsx from "clsx"
import { SorterQuery } from "../hooks/useSorter"
import { DropdownSortItem } from "../units/types/DropdownSortItem"
import { SortDirection } from "../units/types/SortDirection"

export type PageSorterProps = {
  items: DropdownSortItem[]
  onClickSort: (sortBy?: string, orderBy?: SortDirection) => void
  query: SorterQuery
}

export const PageSorter = (props: PageSorterProps) => {
  const { items, query, onClickSort } = props

  return (
    <div className="dropdown text-right mb-3">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Sort
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <button className={clsx("dropdown-item", !query.sortBy && "active")} onClick={() => onClickSort()}>
          Default
        </button>
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => onClickSort(item.sortBy, item.orderBy)}
            className={clsx(
              "dropdown-item",
              query.sortBy === item.sortBy && query.orderBy === item.orderBy && "active"
            )}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  )
}
