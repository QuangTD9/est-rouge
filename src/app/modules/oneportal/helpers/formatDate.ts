import dayjs, { ConfigType } from "dayjs"

export const formatDate = (date?: ConfigType): string | undefined => {
  if (!date) return undefined

  return dayjs(date).format("YYYY/MM/DD HH:mm")
}
