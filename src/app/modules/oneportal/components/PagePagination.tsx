import styled from "styled-components"
import clsx from "clsx"
import { PAGE_LIMIT_DEFAULT } from "../units/constants"

export type PagePaginationProps = {
  pageCount: number
  onGoToNextPage: () => void
  onChangeLimitPage: (limit: number) => void
  onGoToPage: (page: number) => void
  onGoToPrevPage: () => void
  page?: number
  pageLimit?: number
}

export const PagePagination = (props: PagePaginationProps) => {
  const { pageCount, page, pageLimit, onGoToNextPage, onChangeLimitPage, onGoToPage, onGoToPrevPage } = props

  return (
    <Root className="mt-3">
      <SelectLimitPage>
        <p>Limit</p>
        <select
          onChange={(event) => onChangeLimitPage(parseInt(event.target.value))}
          value={pageLimit || PAGE_LIMIT_DEFAULT}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </SelectLimitPage>
      <ul className="pagination">
        <li className={clsx("page-item", !page && "disabled")}>
          <button className="page-link" aria-disabled="true" onClick={onGoToPrevPage}>
            Previous
          </button>
        </li>
        {new Array(pageCount).fill(null).map((_, index) => (
          <li
            key={index}
            onClick={() => onGoToPage(index + 1)}
            className={clsx(
              "page-item",
              ((index + 1).toString() === page?.toString() || (!page && index === 0)) && "active"
            )}
          >
            <button className="page-link">{index + 1}</button>
          </li>
        ))}
        <li className={clsx("page-item", (page || 1).toString() === pageCount?.toString() && "disabled")}>
          <button className="page-link" aria-disabled="true" onClick={onGoToNextPage}>
            Next
          </button>
        </li>
      </ul>
    </Root>
  )
}

const Root = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  ul {
    margin: 0;
  }
`
const SelectLimitPage = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  select {
    min-width: 50px;
    text-align: center;
  }

  p {
    margin: 0;
  }
`
