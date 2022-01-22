import { useNavigate, useLocation } from "react-router-dom"
import { parse, stringify } from "query-string"

export type UseQuery = <TValue extends object>(
  initialValue: TValue,
  stripValues?: any[]
) => [TValue, SetQuery<TValue>, PatchQuery<TValue>]

export type SetQuery<TValue extends object> = (value: Partial<TValue>) => void
export type PatchQuery<TValue extends object> = (value: Partial<TValue>) => void

export const useQuery: UseQuery = <TValue extends object>(
  initialValue,
  stripValues = [undefined, null, "", 0, "0"]
) => {
  const navigate = useNavigate()
  const queryString = useLocation().search

  const query = {
    ...initialValue,
    ...parse(queryString),
  }

  const updateQuery = (state) => {
    const newQueryString = stringify(pickBy(state, (value) => !stripValues.includes(value)))

    navigate({ search: newQueryString })
  }

  const setQuery: SetQuery<TValue> = (state) => updateQuery(state)
  const patchQuery: PatchQuery<TValue> = (state) => updateQuery({ ...query, ...state })

  return [query, setQuery, patchQuery]
}

const pickBy = (object: Record<any, any>, predicate: (value: any) => boolean): Record<any, any> => {
  return Object.keys(object).reduce((accumulator, key) => {
    const value = object[key]

    if (predicate(value)) {
      accumulator[key] = value
    }

    return accumulator
  }, {})
}
