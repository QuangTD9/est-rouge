import { PAGE_LIMIT_DEFAULT } from "../units/constants"
import { ChunkedParams } from "../units/types/ChunkedParams"

export const createChunkedParams = (req?: Partial<ChunkedParams>): ChunkedParams => {
  return {
    ...req,
    limit: req?.limit ?? PAGE_LIMIT_DEFAULT,
    page: req?.page ?? 1,
  }
}
