export const getAppConfig = () => {
  return {
    page: {
      titleTemplate: (page?: string) => (page ? `${page} | EST Rouge` : "EST Rouge"),
    },
  }
}
