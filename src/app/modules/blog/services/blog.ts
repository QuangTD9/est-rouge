import { AxiosInstance } from "axios"
import { createChunkedParams } from "../../oneportal/helpers/createChunkedParams"
import { ChunkedParams } from "../../oneportal/units/types/ChunkedParams"
import { BlogType } from "../units/types/BlogType"

export type BlogParams = ChunkedParams & {}

export const getBlogsPagination = async (api: AxiosInstance, params?: BlogParams): Promise<BlogType[] | undefined> => {
  try {
    const req = createChunkedParams(params)
    const res = await api.get<BlogType[]>("/blogs", {
      params: req,
    })

    return res.data
  } catch (err) {}
}

export const getAlllBlogs = async (api: AxiosInstance, search?: string): Promise<BlogType[] | undefined> => {
  try {
    const res = await api.get<BlogType[]>("/blogs", {
      params: { search },
    })

    return res.data
  } catch (err) {}
}

export const getBlogById = async (api: AxiosInstance, blogId?: string): Promise<BlogType | undefined> => {
  try {
    const res = await api.get<BlogType>(`/blogs/${blogId}`)

    return res.data
  } catch (err) {}
}
