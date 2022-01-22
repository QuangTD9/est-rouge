export const links = {
  home: {
    dashboard: () => "/",
  },
  blog: {
    blogs: () => "/blogs",
    blogDetail: (blogId: string = ":blogId") => `/blog/${blogId}`,
  },
}
