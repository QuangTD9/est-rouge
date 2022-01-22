import { ChangeEvent } from "react"
import styled from "styled-components"
import { useDebounce } from "../hooks/useDebounce"
import { DEBOUNCE_SEARCH_TIME } from "../../blog/units/constants"
import { SearchIcon } from "../../../assets/images"

export type PageSearchProps = {
  onSearch: (searchValue: string) => void
  searchValue?: string
}

export const PageSearch = (props: PageSearchProps) => {
  const { onSearch, searchValue } = props

  const handleChangeTextSearch = useDebounce(async (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }, DEBOUNCE_SEARCH_TIME)

  return (
    <form>
      <FormGroup className="form-group">
        <SearchIcon />
        <input
          type="text"
          className="form-control"
          onChange={handleChangeTextSearch}
          placeholder="Search..."
          defaultValue={searchValue}
        />
      </FormGroup>
    </form>
  )
}

const FormGroup = styled.div`
  position: relative;
  margin: 0;

  svg {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  input {
    padding-left: 30px;
  }
`
